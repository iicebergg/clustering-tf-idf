"""
What this does:
  - Looks at every .js file inside the folder you point it at.
  - Finds the question array in each file (the "...Questions = [ ... ]" block).
  - Pulls the id, text, and type out of each question with a small scanner
    that understands all three JavaScript string styles: 'single', "double",
    and `backtick` template literals.
  - Strips the HTML/MathML markup out of each question's text so what's
    left is clean, readable words for the model to work with.
  - Writes everything to <subject>_questions.csv (open it in Numbers/Excel to
    inspect) and <subject>_questions.json.
"""

import re
import csv
import json
import html
from pathlib import Path

# SETTINGS  -  set SUBJECT, then run. One subject per run.
SUBJECT = "science"                       # "math", "reading", or "science"
JS_FOLDER = Path(f"./js_{SUBJECT}")    # this run reads from ./js_math, ./js_reading, etc.
OUTPUT_DIR = Path(".")                 # output files are named with the subject prefix


def find_question_array(source_text):
    """Return the raw text of the question array literal, or None if absent.

    Anchors on any variable name ending in 'Questions = [' (so it works no
    matter what the array is called), then walks forward matching square
    brackets. It tracks whether we're inside a quoted string so that any
    '[' or ']' sitting inside question text is ignored.
    """
    anchor = re.search(r"[A-Za-z_]*[Qq]uestions\s*=\s*\[", source_text)
    if not anchor:
        return None

    start = source_text.index("[", anchor.start())
    depth = 0
    in_string = False
    quote_char = ""
    i = start

    while i < len(source_text):
        c = source_text[i]
        if in_string:
            if c == "\\":          # backslash escapes the next char; skip both
                i += 2
                continue
            if c == quote_char:    # closing quote of the same type
                in_string = False
        else:
            if c in "'\"`":
                in_string = True
                quote_char = c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:     # matched the opening bracket -> done
                    return source_text[start:i + 1]
        i += 1

    return None  # brackets never balanced (malformed file)


# Map for the common backslash escapes inside JavaScript strings.
_ESCAPES = {"n": "\n", "t": "\t", "r": "\r", "b": "\b", "f": "\f",
            "v": "\v", "0": "\0", "\\": "\\", "'": "'", '"': '"', "`": "`"}


def read_js_string(s, i):
    """Read one JavaScript string starting at s[i] (a ', ", or ` quote).

    Handles backslash escapes and lets backtick strings span newlines.
    Returns (decoded_text, index_just_after_the_closing_quote).
    """
    quote = s[i]
    j = i + 1
    out = []
    while j < len(s):
        c = s[j]
        if c == "\\":                       # an escape sequence
            nxt = s[j + 1] if j + 1 < len(s) else ""
            if nxt == "u" and j + 6 <= len(s):          # \uXXXX
                try:
                    out.append(chr(int(s[j + 2:j + 6], 16)))
                    j += 6
                    continue
                except ValueError:
                    pass
            if nxt == "x" and j + 4 <= len(s):          # \xXX
                try:
                    out.append(chr(int(s[j + 2:j + 4], 16)))
                    j += 4
                    continue
                except ValueError:
                    pass
            out.append(_ESCAPES.get(nxt, nxt))          # known escape, else the raw char
            j += 2
            continue
        if c == quote:                       # closing quote of the same kind
            return "".join(out), j + 1
        out.append(c)
        j += 1
    return "".join(out), j                    # unterminated; return what we have


def parse_questions(array_text):
    """Pull id, text, and type from every question object in the array.

    Walks the array tracking brace depth so it only reads keys that sit
    directly inside a question object (depth 1), ignoring keys inside nested
    option objects like {url, alt}. Recognizes ', ", and ` strings, so it
    handles template literals that json5 cannot.
    """
    results = []
    current = {}
    depth = 0
    i = 0
    n = len(array_text)
    while i < n:
        c = array_text[i]
        if c in "'\"`":                       # skip any string we're not targeting
            _, i = read_js_string(array_text, i)
            continue
        if c == "{":
            depth += 1
            if depth == 1:
                current = {}
            i += 1
            continue
        if c == "}":
            if depth == 1 and current.get("text"):
                results.append(current)
            depth -= 1
            i += 1
            continue
        # Only look for keys directly inside a question object.
        if depth == 1 and (c.isalpha() or c == "_"):
            m = re.match(r"([A-Za-z_]\w*)\s*:", array_text[i:])
            if m:
                key = m.group(1)
                j = i + m.end()
                while j < n and array_text[j] in " \t\r\n":   # skip space before value
                    j += 1
                if key in ("id", "text", "type") and j < n and array_text[j] in "'\"`":
                    value, j = read_js_string(array_text, j)
                    current[key] = value
                i = j
                continue
        i += 1
    return results


def clean_text(raw):
    t = re.sub(r"<br\s*/?>", " ", raw, flags=re.IGNORECASE)  # line breaks -> space
    t = re.sub(r"<[^>]+>", " ", t)                           # drop every HTML/MathML tag
    t = html.unescape(t)                                     # &lt; -> < , &amp; -> & , etc.
    t = re.sub(r"\s+", " ", t)                               # squeeze runs of whitespace
    return t.strip()


def extract_test_id(source_text):
    """Grab window.TEST_IDENTIFIER so each row knows which test it came from."""
    m = re.search(r"TEST_IDENTIFIER\s*=\s*['\"]([^'\"]+)['\"]", source_text)
    return m.group(1) if m else ""


def main():
    js_files = sorted(JS_FOLDER.glob("*.js"))
    if not js_files:
        print(f"No .js files found in {JS_FOLDER.resolve()}")
        print("Create that folder, drop your question files in, and rerun.")
        return

    rows = []
    for path in js_files:
        source = path.read_text(encoding="utf-8")
        array_literal = find_question_array(source)
        if array_literal is None:
            print(f"  skipped (no question array): {path.name}")
            continue

        questions = parse_questions(array_literal)   # list of dicts: id, text, type
        test_id = extract_test_id(source)

        kept = 0
        for q in questions:
            text = q.get("text")
            if not text:                          # ignore anything without question text
                continue
            rows.append({
                "source_file": path.name,
                "test_id": test_id,
                "qid": str(q.get("id", "")),
                "type": q.get("type", ""),
                "clean_text": clean_text(text),
                "raw_text": text,
            })
            kept += 1
        print(f"  {path.name}: {kept} questions")

    # Write the spreadsheet-friendly CSV
    csv_path = OUTPUT_DIR / f"{SUBJECT}_questions.csv"
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=["source_file", "test_id", "qid", "type", "clean_text", "raw_text"]
        )
        writer.writeheader()
        writer.writerows(rows)

    # Write the JSON copy
    json_path = OUTPUT_DIR / f"{SUBJECT}_questions.json"
    json_path.write_text(json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"\nDone. {len(rows)} questions written to:")
    print(f"  {csv_path.resolve()}")
    print(f"  {json_path.resolve()}")
    print(f"\nOpen {csv_path.name} and skim the clean_text column before running step 2.")


if __name__ == "__main__":
    main()