function setUpRecommendationFilter() {
  const controls = document.getElementById("recommendation-filter");
  const input = document.getElementById("recommendation-query");
  const list = document.getElementById("recommendation-list");
  const message = document.getElementById("recommendation-count");

  if (
    !(controls instanceof HTMLElement) ||
    !(input instanceof HTMLInputElement) ||
    !(list instanceof HTMLUListElement) ||
    !(message instanceof HTMLParagraphElement)
  ) {
    return;
  }

  const cards = list.querySelectorAll("li");

  const filterRecommendations = () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    for (const card of cards) {
      const text = card.dataset.search || "";
      const matches = text.toLowerCase().includes(query);
      card.hidden = !matches;

      if (matches) {
        visible = visible + 1;
      }
    }

    if (visible === 0) {
      message.textContent = "No recommendations match. Try other words, or clear the search.";
    } else {
      message.textContent = visible + " of " + cards.length + " recommendations shown.";
    }
  };

  input.addEventListener("input", filterRecommendations);
  filterRecommendations();
  controls.hidden = false;
}

setUpRecommendationFilter();
