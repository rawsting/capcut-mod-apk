const frequentlyUsedEmojis = [
  // Add your frequently used emojis here
];

const emojisByCategory = {
  // Categorize emojis and add them here
};

// Function to generate the frequently used emojis
function generateFrequentlyUsedEmojis() {
  const frequentlyUsedContainer = document.getElementById("frequently-used-container");
  frequentlyUsedEmojis.forEach((emoji) => {
    const emojiElement = document.createElement("span");
    emojiElement.className = "emoji";
    emojiElement.innerText = emoji;
    emojiElement.addEventListener("click", () => copyToClipboard(emoji));
    frequentlyUsedContainer.appendChild(emojiElement);
  });
}

// Function to generate category-wise emojis
function generateCategoryWiseEmojis() {
  const categoryWiseContainer = document.getElementById("category-wise-container");
  for (const category in emojisByCategory) {
    const categoryHeading = document.createElement("h3");
    categoryHeading.innerText = category;
    categoryWiseContainer.appendChild(categoryHeading);

    emojisByCategory[category].forEach((emoji) => {
      const emojiElement = document.createElement("span");
      emojiElement.className = "emoji";
      emojiElement.innerText = emoji;
      emojiElement.addEventListener("click", () => copyToClipboard(emoji));
      categoryWiseContainer.appendChild(emojiElement);
    });
  }
}

// Function to copy emoji to clipboard
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Initialize the page
generateFrequentlyUsedEmojis();
generateCategoryWiseEmojis();
