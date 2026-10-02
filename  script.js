// Target word for the game
const targetWord = "BASKETBALL";

// Select elements from HTML
const wordDisplay = document.getElementById("word-display");
const keyboardDisplay = document.getElementById("keyboard");

// Render empty dashes for each letter in the word
function setupWord() {
  wordDisplay.innerHTML = "";
  for (let i = 0; i < targetWord.length; i++) {
    const dash = document.createElement("span");
    dash.textContent = "_";
    dash.style.fontSize = "2rem";
    dash.style.margin = "0 5px";
    wordDisplay.appendChild(dash);
  }
}

// Render the A-Z keyboard buttons
function setupKeyboard() {
  keyboardDisplay.innerHTML = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let char of alphabet) {
    const button = document.createElement("button");
    button.textContent = char;
    button.style.padding = "10px 15px";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";
    
    keyboardDisplay.appendChild(button);
  }
}

// Initialize the game setup
setupWord();
setupKeyboard();