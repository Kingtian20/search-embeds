const items = [
  {
    title: "1v1 Tennis",
    image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@main/images/tennis.png",
    url: "https://sites.google.com/view/word-learning/gxmes/1v1-tennis"
  }
];

function loadItems(filteredItems = null) {
  const grid = document.getElementById("itemsGrid");
  grid.innerHTML = "";

  (filteredItems || items).forEach((i) => {
    grid.innerHTML += `
      <a class="item-card" href="${i.url}" target="_blank">
        <img src="${i.image}">
        <div class="item-label">${i.title}</div>
      </a>
    `;
  });
}

function fuzzySearch(query) {
  const q = query.toLowerCase();
  return items.filter((i) => i.title.toLowerCase().includes(q));
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");

  input.addEventListener("input", () => {
    const filtered = fuzzySearch(input.value);
    loadItems(filtered);
  });

  loadItems();
});
