// Select increment and decrement buttons
const incrementCount8 = document.getElementById("circle8");

// Select total count8
const totalCount8 = document.getElementById("Total8");

// Variable to track count8
var count8 = 21108;

// Display initial count8 value
totalCount8.innerHTML = "+" + count8;

// Function to increment count8
const handleIncrement8 = () => {
  count8++;
  totalCount8.innerHTML = "+" + count8;
  incrementCount8.removeEventListener('click', handleIncrement8);
};

// Add click event to buttons
incrementCount8.addEventListener("click", handleIncrement8);