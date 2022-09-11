// Select increment and decrement buttons
const incrementCount = document.getElementById("circle1");

// Select total count
const totalCount = document.getElementById("Total1");

// Variable to track count
var count = 51018;

// Display initial count value
totalCount.innerHTML = "+" + count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = "+" + count;
  incrementCount.removeEventListener('click', handleIncrement);
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);