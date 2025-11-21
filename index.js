let fuse;
let items = [];

// Load JSON items
fetch("items.json")
  .then(res => res.json())
  .then(data => {
    items = data;
    fuse = new Fuse(items, {
      keys: ["title"],
      threshold: 0.3
    });

    renderResults(items); // show all items at start
  });

// Perform fuzzy search
function performSearch(query) {
  if (!query.trim()) {
    renderResults(items);
    return;
  }

  const results = fuse.search(query).map(r => r.item);
  renderResults(results);
}

// Render grid
function renderResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  results.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <img src="${item.image}">
      <a href="${item.link}">${item.title}</a>
    `;

    container.appendChild(div);
  });
}
