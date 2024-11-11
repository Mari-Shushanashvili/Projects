let counterValue = 0;

const counterDisplay = document.querySelector(".counter-display")
const resetButton = document.querySelector(".reset");
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");

// Function to update the display
function updateDisplay(){
    counterDisplay.textContent = counterValue;
}

resetButton.addEventListener("click", function() {
    counterValue = 0;
    updateDisplay();
});

decreaseButton.addEventListener("click", function() {
    counterValue -= 1;
    updateDisplay();
});

increaseButton.addEventListener("click", function() {
    counterValue += 1;
    updateDisplay();
});


updateDisplay();