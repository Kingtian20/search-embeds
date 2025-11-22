const data = [
    { title: "Discord", image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@search/imgs/discord.png" },
    { title: "YouTube", image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@search/imgs/youtube.png" },
    { title: "GitHub", image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@search/imgs/github.png" },
    { title: "Google", image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@search/imgs/google.png" },
    { title: "Twitter", image: "https://cdn.jsdelivr.net/gh/Kingtian20/search-embeds@search/imgs/twitter.png" },
];

const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");

// Render items
function render(items) {
    results.innerHTML = "";
    items.forEach(i => {
        const box = document.createElement("div");
        box.className = "item";

        box.innerHTML = `
            <img src="${i.image}">
            <div class="title-overlay">${i.title}</div>
        `;

        results.appendChild(box);
    });
}

// Simple fuzzy search
function fuzzySearch(query) {
    query = query.toLowerCase();
    return data.filter(item => item.title.toLowerCase().includes(query));
}

// Initial render
render(data);

// Live update
searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();
    render(fuzzySearch(value));
});
