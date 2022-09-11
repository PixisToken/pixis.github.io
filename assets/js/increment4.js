// Select increment and decrement buttons
const incrementCount4 = document.getElementById("circle4");

// Select total count4
const totalCount4 = document.getElementById("Total4");

// Variable to track count4
var count4 = 29821;

// Display initial count4 value
totalCount4.innerHTML = "+" + count4;

// Function to increment count4
const handleIncrement4 = () => {
  count4++;
  totalCount4.innerHTML = "+" + count4;
  incrementCount4.removeEventListener('click', handleIncrement4);
};

// Add click event to buttons
incrementCount4.addEventListener("click", handleIncrement4);