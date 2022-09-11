// Select increment and decrement buttons
const incrementCount20 = document.getElementById("circle20");

// Select total count20
const totalCount20 = document.getElementById("Total20");

// Variable to track count20
var count20 = 45;

// Display initial count20 value
totalCount20.innerHTML = "+" + count20;

// Function to increment count20
const handleIncrement20 = () => {
  count20++;
  totalCount20.innerHTML = "+" + count20;
  incrementCount20.removeEventListener('click', handleIncrement20);
};

// Add click event to buttons
incrementCount20.addEventListener("click", handleIncrement20);