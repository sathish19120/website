// Update the clock dynamically
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

// Display a motivational quote
function showQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Dream big and dare to fail.",
        "Act as if what you do makes a difference. It does."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
