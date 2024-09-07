let timerText = document.getElementById('timer');
let wpmText = document.getElementById('wpm');
let inputArea = document.getElementById('input-area');
let quoteElement = document.getElementById('quote');
let resetBtn = document.getElementById('reset-btn');

let timeElapsed = 0;
let timer = null;
let isTyping = false;
let currentQuote = '';

// Array of random quotes
const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Coding is fun but can be challenging at times.",
    "JavaScript is the language of the web.",
    "HTML, CSS, and JavaScript form the backbone of web development.",
    "Never stop learning, because life never stops teaching.",
    "In a world full of variables, be a constant.",
    "A journey of a thousand miles begins with a single step."
];

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        timerText.textContent = `Time: ${timeElapsed}s`;
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Function to calculate WPM
function calculateWPM() {
    const wordsTyped = inputArea.value.trim().split(/\s+/).length;
    const minutesElapsed = timeElapsed / 60;
    const wpm = Math.round(wordsTyped / minutesElapsed);
    wpmText.textContent = `WPM: ${wpm}`;
}

// Function to set a random quote
function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quoteElement.textContent = currentQuote;
}

// Event listener for input area
inputArea.addEventListener('input', function () {
    if (!isTyping) {
        isTyping = true;
        startTimer();
    }

    // Stop timer when the input matches the quote
    if (inputArea.value.trim() === currentQuote) {
        stopTimer();
        calculateWPM();
    }
});

// Event listener for reset button
resetBtn.addEventListener('click', function () {
    stopTimer();
    inputArea.value = '';
    timeElapsed = 0;
    isTyping = false;
    timerText.textContent = 'Time: 0s';
    wpmText.textContent = 'WPM: 0';
    setRandomQuote(); // Set a new random quote
});

// Set an initial random quote when the page loads
setRandomQuote();
