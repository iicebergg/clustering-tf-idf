"""
Pipeline (this is the order things happen):
  1. SBERT  reads each question and turns it into a 384-number vector that
     captures meaning. Similar wording -> nearby vectors.
  2. KMeans  groups those vectors into clusters. Each cluster is a candidate
     category. THIS is the step that actually assigns categories. (t-SNE alone
     does not assign categories; it only draws a picture.)
  3. t-SNE  squashes the vectors down to 2 dimensions so the clusters can be
     plotted and eyeballed.
  4. TF-IDF  pulls the most distinctive words out of each cluster so you have
     a starting name for every category (e.g. "factor, polynomial, binomial").

Outputs:
  - questions_with_clusters.csv   every question + its cluster number + plot coords
  - clusters_plot.png             the t-SNE scatter, colored by cluster
  - printed keyword list          to help you name each cluster
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap, BoundaryNorm
from sentence_transformers import SentenceTransformer
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.manifold import TSNE
from sklearn.feature_extraction.text import TfidfVectorizer

# SETTINGS
INPUT_CSV   = None    # leave None to use the SUBJECT below; or hard-code a filename.
SUBJECT     = "math"  # "math", "reading", or "science" -- must match step 1.
MODEL_NAME  = "all-mpnet-base-v2"       # higher quality model so clusters are clear
N_CLUSTERS  = 5    # None = let the script suggest a number automatically.
                      # Set an integer (e.g. 12) to force that many categories.
MIN_K, MAX_K = 6, 20  # range searched when N_CLUSTERS is None.
PERPLEXITY  = 30      # t-SNE smoothing
RANDOM_SEED = 42      # fixes randomness
# ----------------------------------------------------------------------


def main():
    input_csv = INPUT_CSV if INPUT_CSV else f"{SUBJECT}_questions.csv"
    prefix = SUBJECT

    # Load the questions from step 1
    df = pd.read_csv(input_csv).fillna("")
    texts = df["clean_text"].tolist()
    n = len(texts)
    print(f"Loaded {n} questions from {input_csv}")

    # Step 1: SBERT embeddings
    print(f"Embedding with {MODEL_NAME}...")
    model = SentenceTransformer(MODEL_NAME)
    # normalize_embeddings makes distance behave like cosine similarity,
    # which is what you want for grouping by meaning.
    embeddings = model.encode(texts, show_progress_bar=True, normalize_embeddings=True)

    # Compress to 50 dimensions first. (ASK: is this appropriate?)
    n_components = min(50, n - 1)
    reduced = PCA(n_components=n_components, random_state=RANDOM_SEED).fit_transform(embeddings)

    # Step 2: choose how many clusters, then cluster
    if N_CLUSTERS is None:
        print("\nSearching for a good number of clusters (higher score = cleaner split):")
        best_k, best_score = None, -1.0
        for k in range(MIN_K, min(MAX_K, n - 1) + 1):
            labels_try = KMeans(n_clusters=k, random_state=RANDOM_SEED, n_init=10).fit_predict(reduced)
            score = silhouette_score(reduced, labels_try)
            print(f"  k = {k:2d}   silhouette = {score:.3f}")
            if score > best_score:
                best_k, best_score = k, score
        k = best_k
        print(f"\nUsing k = {k} (best score {best_score:.3f}). "
              f"Override by setting N_CLUSTERS at the top.")
    else:
        k = N_CLUSTERS
        print(f"\nUsing k = {k} (set manually).")

    kmeans = KMeans(n_clusters=k, random_state=RANDOM_SEED, n_init=10)
    df["cluster"] = kmeans.fit_predict(reduced)

    # Step 3: t-SNE for the picture
    print("Running t-SNE for the 2D plot...")
    safe_perplexity = min(PERPLEXITY, (n - 1) // 3)   # t-SNE needs perplexity < n
    coords = TSNE(
        n_components=2,
        perplexity=safe_perplexity,
        init="pca",
        learning_rate="auto",
        random_state=RANDOM_SEED,
    ).fit_transform(reduced)
    df["tsne_x"], df["tsne_y"] = coords[:, 0], coords[:, 1]

    # Exactly as many colors as there are clusters will be used
    distinct_colors = [
        "#e6194B", "#3cb44b", "#4363d8", "#f58231", "#911eb4",
        "#008080", "#f032e6", "#9A6324", "#808000", "#000075",
        "#800000", "#e6b800", "#2f4f4f", "#ff6f91", "#5d8aa8",
        "#7f7f7f", "#17becf", "#bcbd22", "#393b79", "#637939",
    ]
    if k <= len(distinct_colors):
        cmap = ListedColormap(distinct_colors[:k])   # exactly k colors, one per cluster
    else:
        cmap = plt.get_cmap("tab20").resampled(k)    # fallback if you ever exceed the list
    # BoundaryNorm pins each integer cluster to one solid color band (no gradient).
    norm = BoundaryNorm(range(k + 1), cmap.N)

    plt.figure(figsize=(12, 9))
    scatter = plt.scatter(coords[:, 0], coords[:, 1], c=df["cluster"],
                          cmap=cmap, norm=norm, s=14, alpha=0.85)
    plt.title(f"SOLace {SUBJECT} questions grouped into {k} clusters (SBERT + t-SNE)")
    plt.xlabel("t-SNE dimension 1")
    plt.ylabel("t-SNE dimension 2")
    # Center each tick on its color band so the numbers line up with the colors.
    cbar = plt.colorbar(scatter, ticks=[i + 0.5 for i in range(k)])
    cbar.set_ticklabels(range(k))
    cbar.set_label("cluster number")
    plt.tight_layout()
    plt.savefig(f"{prefix}_clusters_plot.png", dpi=150)
    print(f"Saved {prefix}_clusters_plot.png")

    # Step 4: name the clusters by their distinctive words
    # token_pattern keeps only real words of 3+ letters, so stray math symbols
    # and single variables (x, y, 2) don't crowd out the meaningful terms.
    vectorizer = TfidfVectorizer(
        stop_words="english",
        token_pattern=r"(?u)\b[a-zA-Z]{3,}\b",
    )
    tfidf = vectorizer.fit_transform(texts)
    vocab = np.array(vectorizer.get_feature_names_out())

    print("\nTop words per cluster (use these to name your categories):")
    keyword_rows = []
    for c in range(k):
        member_rows = np.where(df["cluster"].values == c)[0]
        mean_tfidf = tfidf[member_rows].mean(axis=0).A1   # average word weight in this cluster
        top_words = vocab[mean_tfidf.argsort()[::-1][:8]]
        keywords = ", ".join(top_words)
        print(f"  cluster {c:2d}  ({len(member_rows):4d} questions):  {keywords}")
        keyword_rows.append({
            "cluster": c,
            "num_questions": len(member_rows),
            "top_keywords": keywords,
            "category_name": "",   # blank column for you to fill in your category names
        })

    # Save the keyword summary so it survives after you close the Terminal.
    pd.DataFrame(keyword_rows).to_csv(f"{prefix}_cluster_keywords.csv", index=False)
    print(f"\nSaved {prefix}_cluster_keywords.csv")

    # Save the labeled table
    out_cols = ["source_file", "test_id", "qid", "type", "cluster",
                "tsne_x", "tsne_y", "clean_text"]
    df[out_cols].to_csv(f"{prefix}_questions_with_clusters.csv", index=False)
    print(f"\nSaved {prefix}_questions_with_clusters.csv")
    print(f"Open {prefix}_clusters_plot.png and {prefix}_cluster_keywords.csv together, "
          "then name each cluster based on its top words.")


if __name__ == "__main__":
    main()