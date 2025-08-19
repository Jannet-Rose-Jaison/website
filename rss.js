document.addEventListener("DOMContentLoaded", async () => {
  const list = document.getElementById("rssFeed");
  if (!list) return;

  try {
    // Fetch latest 5 articles from all of Dev.to
    const resp = await fetch("https://dev.to/api/articles?per_page=5");
    if (!resp.ok) throw new Error("Failed to fetch articles");
    const articles = await resp.json();

    list.innerHTML = ""; // clear any placeholder

    if (!articles || articles.length === 0) {
      list.innerHTML = `<li>No recent articles found.</li>`;
      return;
    }

    // Loop through and show 5 latest global articles
    articles.forEach((a) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${a.url}" target="_blank" rel="noopener">
          ${a.title}
        </a>
        <br>
        <small>By ${a.user.name} · Published on ${new Date(a.published_at).toLocaleDateString()}</small>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    list.innerHTML = `<li class="error">Could not load Dev.to feed: ${err.message}</li>`;
  }
});
