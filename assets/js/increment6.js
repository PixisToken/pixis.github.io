// Select increment and decrement buttons
const incrementCount6 = document.getElementById("circle6");

// Select total count6
const totalCount6 = document.getElementById("Total6");

// Variable to track count6
var count6 = 24201;

// Display initial count6 value
totalCount6.innerHTML = "+" + count6;

// Function to increment count6
const handleIncrement6 = () => {
  count6++;
  totalCount6.innerHTML = "+" + count6;
  incrementCount6.removeEventListener('click', handleIncrement6);
};

// Add click event to buttons
incrementCount6.addEventListener("click", handleIncrement6);