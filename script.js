const frequentlyUsedEmojis = [
  // Add your frequently used emojis here
  "😄", "😊", "😃", "😉", "😍", "😘", "🥰", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥳", "🤩", "🥸", "🤗", "🤭", "🤫", "🤔", "🤐", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤥", "🤫", "🤔", "🤐", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥰", "😍", "😘", "😗", "😙", "😚", "🥸", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "🤗", "🤭", "🤫", "🤥", "🤐", "🤨", "😑", "😶", "😐", "😏", "😒", "🙄", "😬", "🤨", "🤥", "🤫", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😒", "😔"
];

const emojisByCategory = {
  "Smiley Face Emojis": ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃"],
  "Emotional Faces Emojis": ["😉", "😌", "😍", "😘", "🥰", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳"],
  "Faces with Tongue Emojis": ["😋", "😛", "😝", "😜", "🤪"],
  "Neutral Faces Emojis": ["😐", "😑", "😶", "🙄", "😏", "😒", "🤨"],
  "Sleepy Faces Emojis": ["😴", "🥱", "😪", "😫"],
  "Sick Faces Emojis": ["😷", "🤒", "🤕", "🤢", "🤮", "🤧"],
  "Concerned Faces Emojis": ["😕", "😟", "🙁", "☹️", "😮", "😯", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩"],
  "Negative Faces Emojis": ["😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😒", "😔"],
  "Costume Faces Emojis": ["🤠", "🥳", "🥸"],
  "Faces that require more than one unicode character": ["🥺", "🤗", "🤭", "🤫", "🤔", "🤐"],
  "Cat Faces Emojis": ["😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"],
  "Monkey Faces Emojis": ["🙈", "🙉", "🙊"],
  "Emotion Emojis": ["💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎"],
  "Hands and other Body Parts Emojis": ["👋", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅"],
  "Person Emojis": ["🙎", "🙎‍♂️", "🙎‍♀️", "🙍", "🙍‍♂️", "🙍‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🕴️", "🧗", "🧗‍♂️", "🧗‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀"],
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
function generateCategoryWiseEmojis(category, emojis) {
  const categoryContainer = document.createElement("div");
  categoryContainer.className = "category-section";
  
  const categoryHeading = document.createElement("h3");
  categoryHeading.className = "category-heading";
  categoryHeading.innerText = category;
  categoryContainer.appendChild(categoryHeading);

  const emojiContainer = document.createElement("div");
  emojiContainer.className = "emoji-container";
  emojis.forEach((emoji) => {
    const emojiElement = document.createElement("span");
    emojiElement.className = "emoji";
    emojiElement.innerText = emoji;
    emojiElement.addEventListener("click", () => copyToClipboard(emoji));
    emojiContainer.appendChild(emojiElement);
  });

  categoryContainer.appendChild(emojiContainer);
  document.querySelector(".category-container").appendChild(categoryContainer);
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
for (const category in emojisByCategory) {
  generateCategoryWiseEmojis(category, emojisByCategory[category]);
}
