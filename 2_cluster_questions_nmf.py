"""
STEP 2, ALTERNATIVE  -  Cluster questions with TF-IDF + NMF (instead of SBERT).

Same inputs and outputs as the SBERT version, so the two can be compared and so
step 3 keeps working. The difference is the engine:

  1. TF-IDF   scores each question's words by how distinctive they are.
  2. NMF      factors that into topics. Each topic is a ranked keyword list, and
              each question's cluster is the topic it weighs on most. This is the
              step that assigns categories, and its keywords name them for free.
  3. t-SNE    squashes the NMF topic weights to 2D so you can eyeball the groups
              and compare the layout against the SBERT plot.

Outputs (note the nmf_ tag so they sit beside, not on top of, the SBERT files):
  - <subject>_nmf_clusters_plot.png
  - <subject>_nmf_questions_with_clusters.csv   (same columns as the SBERT file)
  - <subject>_nmf_cluster_keywords.csv

Run with:    uv run python 2_cluster_questions_nmf.py
Needs: scikit-learn, matplotlib, pandas  (already installed for the SBERT step)
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap, BoundaryNorm
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import NMF
from sklearn.metrics import silhouette_score
from sklearn.manifold import TSNE
from pathlib import Path

# ----------------------------------------------------------------------
# SETTINGS
# ----------------------------------------------------------------------
SUBJECT     = "math"        # "math", "reading", or "science" -- must match step 1
N_TOPICS    = None          # None = let the script pick; or set an integer to force it.
MIN_K, MAX_K = 6, 20        # range searched when N_TOPICS is None.
PERPLEXITY  = 30            # t-SNE smoothing, same default as the SBERT script.
RANDOM_SEED = 42
VOCAB_FILE  = "auto"        # how to restrict TF-IDF to a curated dictionary:
                            #   "auto" = use <subject>_vocab.txt for whichever SUBJECT
                            #            is set, so each subject gets its own keywords.
                            #   None   = score every word in the questions (no dictionary).
                            #   "path/to/file.txt" = use that one file for every subject.
                            # With "auto" you keep three files side by side:
                            #   math_vocab.txt, reading_vocab.txt, science_vocab.txt
# ----------------------------------------------------------------------


def build_topics(tfidf, k):
    """Fit NMF with k topics. Returns (weights, components, labels).

    weights[i, t]  = how strongly question i belongs to topic t
    components[t]  = topic t's weight on every word (its keyword profile)
    labels[i]      = the topic question i belongs to (its highest weight)
    """
    model = NMF(n_components=k, init="nndsvda", random_state=RANDOM_SEED, max_iter=600)
    weights = model.fit_transform(tfidf)     # questions x topics
    labels = weights.argmax(axis=1)          # each question's best topic
    return weights, model.components_, labels


def main():
    # ---- Load the step-1 questions ----
    df = pd.read_csv(f"{SUBJECT}_questions.csv").fillna("")
    texts = df["clean_text"].tolist()
    n = len(texts)
    print(f"Loaded {n} questions from {SUBJECT}_questions.csv")

    # ---- STEP 1: TF-IDF features ----
    # ngrams (1,2) catch phrases like "simplest radical form"; sublinear_tf damps
    # repeated words; min_df/max_df drop one-offs and words too common to separate.
    # token_pattern keeps real words of 3+ letters so stray symbols stay out.
    vocabulary = None
    vocab_path = f"{SUBJECT}_vocab.txt" if VOCAB_FILE == "auto" else VOCAB_FILE
    if vocab_path:
        if Path(vocab_path).exists():
            with open(vocab_path, encoding="utf-8") as f:
                vocabulary = [w.strip().lower() for w in f if w.strip()]
            print(f"Restricting TF-IDF to {len(vocabulary)} dictionary terms from {vocab_path}")
        else:
            print(f"No dictionary file at {vocab_path}; scoring every word instead.")

    vectorizer = TfidfVectorizer(
        stop_words="english",
        token_pattern=r"(?u)\b[a-zA-Z]{3,}\b",
        ngram_range=(1, 2),
        sublinear_tf=True,
        min_df=2,
        max_df=0.5,
        vocabulary=vocabulary,
    )
    tfidf = vectorizer.fit_transform(texts)
    vocab = np.array(vectorizer.get_feature_names_out())
    print(f"TF-IDF matrix: {tfidf.shape[0]} questions x {tfidf.shape[1]} terms")

    # ---- STEP 2: choose how many topics, then factor with NMF ----
    if N_TOPICS is None:
        print("\nSearching for a good number of topics (higher score = cleaner split):")
        best_k, best_score = None, -1.0
        for k in range(MIN_K, min(MAX_K, n - 1) + 1):
            w_try, _, labels_try = build_topics(tfidf, k)
            # silhouette needs at least two non-empty topics to mean anything
            if len(set(labels_try)) < 2:
                continue
            score = silhouette_score(w_try, labels_try)
            print(f"  topics = {k:2d}   silhouette = {score:.3f}")
            if score > best_score:
                best_k, best_score = k, score
        k = best_k
        print(f"\nUsing {k} topics (best score {best_score:.3f}). "
              f"Override by setting N_TOPICS at the top.")
    else:
        k = N_TOPICS
        print(f"\nUsing {k} topics (set manually).")

    weights, components, labels = build_topics(tfidf, k)
    df["cluster"] = labels

    # ---- STEP 3: t-SNE on the NMF topic weights, for the comparison plot ----
    print("Running t-SNE for the 2D plot...")
    safe_perplexity = min(PERPLEXITY, (n - 1) // 3)
    coords = TSNE(
        n_components=2,
        perplexity=safe_perplexity,
        init="pca",
        learning_rate="auto",
        random_state=RANDOM_SEED,
    ).fit_transform(weights)
    df["tsne_x"], df["tsne_y"] = coords[:, 0], coords[:, 1]

    # Same color treatment as the SBERT plot so the two read side by side.
    distinct_colors = [
        "#e6194B", "#3cb44b", "#4363d8", "#f58231", "#911eb4",
        "#008080", "#f032e6", "#9A6324", "#808000", "#000075",
        "#800000", "#e6b800", "#2f4f4f", "#ff6f91", "#5d8aa8",
        "#7f7f7f", "#17becf", "#bcbd22", "#393b79", "#637939",
    ]
    cmap = ListedColormap(distinct_colors[:k]) if k <= len(distinct_colors) \
        else plt.get_cmap("tab20").resampled(k)
    norm = BoundaryNorm(range(k + 1), cmap.N)

    plt.figure(figsize=(12, 9))
    scatter = plt.scatter(coords[:, 0], coords[:, 1], c=df["cluster"],
                          cmap=cmap, norm=norm, s=14, alpha=0.85)
    plt.title(f"SOLace {SUBJECT} questions grouped into {k} clusters (TF-IDF + NMF)")
    plt.xlabel("t-SNE dimension 1")
    plt.ylabel("t-SNE dimension 2")
    cbar = plt.colorbar(scatter, ticks=[i + 0.5 for i in range(k)])
    cbar.set_ticklabels(range(k))
    cbar.set_label("cluster number")
    plt.tight_layout()
    plt.savefig(f"{SUBJECT}_nmf_clusters_plot.png", dpi=150)
    print(f"Saved {SUBJECT}_nmf_clusters_plot.png")

    # ---- STEP 4: name each cluster from its own topic keywords ----
    # NMF hands us the keywords directly: each topic's component row ranks words.
    print("\nTop words per cluster (straight from the NMF topics):")
    keyword_rows = []
    for c in range(k):
        top_words = vocab[components[c].argsort()[::-1][:8]]
        keywords = ", ".join(top_words)
        count = int((labels == c).sum())
        print(f"  cluster {c:2d}  ({count:4d} questions):  {keywords}")
        keyword_rows.append({
            "cluster": c,
            "num_questions": count,
            "top_keywords": keywords,
            "category_name": "",
        })
    pd.DataFrame(keyword_rows).to_csv(f"{SUBJECT}_nmf_cluster_keywords.csv", index=False)
    print(f"\nSaved {SUBJECT}_nmf_cluster_keywords.csv")

    # ---- Save the labeled table (same columns as the SBERT version) ----
    out_cols = ["source_file", "test_id", "qid", "type", "cluster",
                "tsne_x", "tsne_y", "clean_text"]
    df[out_cols].to_csv(f"{SUBJECT}_nmf_questions_with_clusters.csv", index=False)
    print(f"Saved {SUBJECT}_nmf_questions_with_clusters.csv")
    print(f"\nCompare {SUBJECT}_nmf_clusters_plot.png against {SUBJECT}_clusters_plot.png "
          "to see how the TF-IDF + NMF grouping differs from SBERT.")


if __name__ == "__main__":
    main()