"""
Reads one file, question_responses.csv, which already carries a test_id column
(the attempt-to-test lookup you did in Google Sheets). Rows whose test_id reads
"no match" are voided attempts that were rushed, so they are dropped before any
averaging. Every remaining response is matched to its cluster from the step-2
files on (test_id, question_id == qid), then averaged per cluster.
"""

import pandas as pd

# SETTINGS
RESPONSES_CSV = "question_responses.csv"
SUBJECTS      = ["math", "reading", "science"]   # each needs <subject>_questions_with_clusters.csv
OUTPUT_CSV    = "cluster_performance.csv"
# ----------------------------------------------------------------------


def main():
    # STEP 1: stack the step-2 cluster files into one reference table
    # Each file is one subject. Tagging rows with their subject keeps the
    # per-subject cluster numbers from colliding (math 3 vs reading 3).
    cluster_frames = []
    for subject in SUBJECTS:
        c = pd.read_csv(f"{subject}_questions_with_clusters.csv",
                        usecols=["test_id", "qid", "cluster"])
        c["subject"] = subject
        cluster_frames.append(c)
    clusters = pd.concat(cluster_frames, ignore_index=True)
    clusters["cluster_label"] = clusters["subject"] + "-" + clusters["cluster"].astype(str)
    clusters["qid"] = pd.to_numeric(clusters["qid"], errors="coerce").astype("Int64")
    clusters["test_id"] = clusters["test_id"].astype(str).str.strip()

    # STEP 2: load the responses CSV and drop voided ("no match") tests
    responses = pd.read_csv(RESPONSES_CSV)
    responses["test_id"] = responses["test_id"].astype(str).str.strip()
    voided = responses["test_id"].str.lower() == "no match"
    print(f"Voided (rushed) responses dropped: {voided.sum()} of {len(responses)}")
    responses = responses[~voided].copy()

    # STEP 3: align the join-key type (question_number is not used)
    responses["question_id"] = pd.to_numeric(responses["question_id"], errors="coerce").astype("Int64")

    # STEP 4: match each response to its cluster on (test_id, question_id == qid)
    # The per-question match is question_id == qid, exactly as you said. test_id
    # stays in the key alongside it because question_id restarts at 1 in every
    # test, so question 5 of one test must not borrow question 5 of another.
    merged = responses.merge(
        clusters,
        left_on=["test_id", "question_id"],
        right_on=["test_id", "qid"],
        how="left",
    )
    graded = merged.dropna(subset=["cluster_label"])

    unmatched = len(merged) - len(graded)
    print(f"Responses kept: {len(merged)}  |  matched to a cluster: {len(graded)}  |  unmatched: {unmatched}")
    answered = set(zip(graded["test_id"], graded["qid"]))
    all_questions = set(zip(clusters["test_id"], clusters["qid"]))
    print(f"Cluster questions that drew zero responses: {len(all_questions - answered)}")

    # STEP 5: average performance per cluster
    # was_correct is True/False, so its mean is the fraction answered correctly
    summary = (
        graded.groupby(["subject", "cluster_label"])
        .agg(
            avg_pct_correct=("was_correct", "mean"),
            n_responses=("was_correct", "size"),
            avg_time_seconds=("time_seconds", "mean"),
            avg_answer_changes=("answer_changes", "mean"),
        )
        .reset_index()
        .sort_values(["subject", "avg_pct_correct"])   # weakest clusters first
    )
    summary["avg_pct_correct"] = (summary["avg_pct_correct"] * 100).round(1)
    summary["avg_time_seconds"] = summary["avg_time_seconds"].round(1)
    summary["avg_answer_changes"] = summary["avg_answer_changes"].round(2)

    summary.to_csv(OUTPUT_CSV, index=False)
    print(f"\nSaved {OUTPUT_CSV}\n")
    print(summary.to_string(index=False))


if __name__ == "__main__":
    main()