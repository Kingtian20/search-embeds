      const items = [
        {
          title: "Item One",
          image: "https://via.placeholder.com/300?text=One",
          url: "https://example.com/1",
        },
        {
          title: "Item Two",
          image: "https://via.placeholder.com/300?text=Two",
          url: "https://example.com/2",
        },
        {
          title: "Item Three",
          image: "https://via.placeholder.com/300?text=Three",
          url: "https://example.com/3",
        },
        {
          title: "Item Four",
          image: "https://via.placeholder.com/300?text=Four",
          url: "https://example.com/4",
        },
        {
          title: "Item Five",
          image: "https://via.placeholder.com/300?text=Five",
          url: "https://example.com/5",
        },
        { title: "Item Six", image: "idk.jpeg", url: "https://example.com/6" },
      ];

      function loadItems(filteredItems = null) {
        const grid = document.getElementById("grid");
        grid.innerHTML = "";
        (filteredItems || items).forEach((i) => {
          grid.innerHTML += `
        <a class="item" href="${i.url}" target="_blank">
          <img src="${i.image}">
          <div class="item-title">${i.title}</div>
        </a>
      `;
        });
      }

      function fuzzySearch(query) {
        const q = query.toLowerCase();
        return items.filter((i) => i.title.toLowerCase().includes(q));
      }

      document.addEventListener("DOMContentLoaded", () => {
        const input = document.getElementById("i77q");

        input.addEventListener("input", () => {
          const filtered = fuzzySearch(input.value);
          loadItems(filtered);
        });

        loadItems();
      });
