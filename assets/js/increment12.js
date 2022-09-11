// Select increment and decrement buttons
const incrementcount12 = document.getElementById("circle12");

// Select total count12
const totalcount12 = document.getElementById("Total12");

// Variable to track count12
var count12 = 12048;

// Display initial count12 value
totalcount12.innerHTML = "+" + count12;

// Function to increment count12
const handleIncrement12 = () => {
  count12++;
  totalcount12.innerHTML = "+" + count12;
  incrementcount12.removeEventListener('click', handleIncrement12);
};

// Add click event to buttons
incrementcount12.addEventListener("click", handleIncrement12);