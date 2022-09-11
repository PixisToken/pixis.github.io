// Select increment and decrement buttons
const incrementCount5 = document.getElementById("circle5");

// Select total count5
const totalCount5 = document.getElementById("Total5");

// Variable to track count5
var count5 = 25791;

// Display initial count5 value
totalCount5.innerHTML = "+" + count5;

// Function to increment count5
const handleIncrement5 = () => {
  count5++;
  totalCount5.innerHTML = "+" + count5;
  incrementCount5.removeEventListener('click', handleIncrement5);
};

// Add click event to buttons
incrementCount5.addEventListener("click", handleIncrement5);
