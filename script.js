document.addEventListener("DOMContentLoaded", function () {
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

    // Function to filter emojis based on search input
    function filterEmojis(searchTerm) {
        emojiContainer.innerHTML = "";
        const filteredEmojis = emojis.filter((emoji) => {
            return emoji.includes(searchTerm);
        });
        filteredEmojis.forEach(createEmojiCard);
    }

    // Function to display all emojis
    function displayAllEmojis() {
        emojiContainer.innerHTML = "";
        emojis.forEach(createEmojiCard);
    }

    // Event listener for search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== "") {
            filterEmojis(searchTerm);
        } else {
            displayAllEmojis();
        }
    });

    // Display all emojis by default
    displayAllEmojis();
});
