// Select increment and decrement buttons
const incrementCount9 = document.getElementById("circle9");

// Select total count9
const totalCount9 = document.getElementById("Total9");

// Variable to track count9
var count9 = 18205;

// Display initial count9 value
totalCount9.innerHTML = "+" + count9;

// Function to increment count9
const handleIncrement9 = () => {
  count9++;
  totalCount9.innerHTML = "+" + count9;
  incrementCount9.removeEventListener('click', handleIncrement9);
};

// Add click event to buttons
incrementCount9.addEventListener("click", handleIncrement9);