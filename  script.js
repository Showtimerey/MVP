// Target word for the game
const targetWord = "BASKETBALL";

// Select elements from HTML
const wordDisplay = document.getElementById("word-display");
const keyboardDisplay = document.getElementById("keyboard");

// Render empty dashes for each letter in the word
function setupWord() {
  wordDisplay.innerHTML = "";
  for (let i = 0; i < targetWord.length; i++) {
    const dash = document.createElement("div");
    dash.classList.add("dash-box");
    dash.textContent = "_";
    wordDisplay.appendChild(dash);
  }
}

// Render the A-Z keyboard buttons
function setupKeyboard() {
  keyboardDisplay.innerHTML = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let char of alphabet) {
    const button = document.createElement("button");
    button.classList.add("key-btn");
    button.textContent = char;
    keyboardDisplay.appendChild(button);
  }
}

// Initialize the game setup
setupWord();
setupKeyboard();