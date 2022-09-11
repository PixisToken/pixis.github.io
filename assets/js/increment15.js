// Select increment and decrement buttons
const incrementCount15 = document.getElementById("circle15");

// Select total count15
const totalCount15 = document.getElementById("Total15");

// Variable to track count15
var count15 = 5105;

// Display initial count15 value
totalCount15.innerHTML = "+" + count15;

// Function to increment count15
const handleIncrement15 = () => {
  count15++;
  totalCount15.innerHTML = "+" + count15;
  incrementCount15.removeEventListener('click', handleIncrement15);
};

// Add click event to buttons
incrementCount15.addEventListener("click", handleIncrement15);