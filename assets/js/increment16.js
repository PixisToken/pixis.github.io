// Select increment and decrement buttons
const incrementCount16 = document.getElementById("circle16");

// Select total count16
const totalCount16 = document.getElementById("Total16");

// Variable to track count16
var count16 = 2048;

// Display initial count16 value
totalCount16.innerHTML = "+" + count16;

// Function to increment count16
const handleIncrement16 = () => {
  count16++;
  totalCount16.innerHTML = "+" + count16;
  incrementCount16.removeEventListener('click', handleIncrement16);
};

// Add click event to buttons
incrementCount16.addEventListener("click", handleIncrement16);