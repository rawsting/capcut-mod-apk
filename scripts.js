document.addEventListener("DOMContentLoaded", function () {
    const categories = Object.keys(emojis);
    const categoriesContainer = document.querySelector(".categories");
    const emojiContainer = document.getElementById("emojiContainer");
    const searchInput = document.getElementById("searchInput");

    // Function to generate emoji cards
    function createEmojiCard(emoji) {
        const emojiCard = document.createElement("div");
        emojiCard.classList.add("emoji-card");
        emojiCard.innerHTML = `<span class="emoji">${emoji}</span>`;
        emojiCard.addEventListener("click", () => {
            copyToClipboard(emoji);
        });
        emojiContainer.appendChild(emojiCard);
    }

    // Function to copy emoji to clipboard
    function copyToClipboard(emoji) {
        const textArea = document.createElement("textarea");
        textArea.value = emoji;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert(`Copied: ${emoji}`);
    }

    // Function to filter emojis based on search input and category
    function filterEmojis(category, searchTerm) {
        emojiContainer.innerHTML = "";
        const filteredEmojis = emojis[category].filter((emoji) => {
            return emoji.includes(searchTerm);
        });
        filteredEmojis.forEach(createEmojiCard);
    }

    // Function to display emojis of selected category
    function displayEmojis(category) {
        emojiContainer.innerHTML = "";
        emojis[category].forEach(createEmojiCard);
    }

    // Function to display all emojis
    function displayAllEmojis() {
        emojiContainer.innerHTML = "";
        Object.values(emojis).forEach((categoryEmojis) => {
            categoryEmojis.forEach(createEmojiCard);
        });
    }

    // Function to create category buttons
    function createCategoryButton(category) {
        const button = document.createElement("button");
        button.textContent = category;
        button.addEventListener("click", () => {
            displayEmojis(category);
        });
        categoriesContainer.appendChild(button);
    }

    // Event listener for search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const activeCategory = categoriesContainer.querySelector(".active");
        if (activeCategory) {
            filterEmojis(activeCategory.textContent, searchTerm);
        } else {
            displayAllEmojis();
        }
    });

    // Create category buttons
    categories.forEach(createCategoryButton);
});
