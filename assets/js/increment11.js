// Select increment and decrement buttons
const incrementCount11 = document.getElementById("circle11");

// Select total count11
const totalCount11 = document.getElementById("Total11");

// Variable to track count11
var count11 = 15048;

// Display initial count11 value
totalCount11.innerHTML = "+" + count11;

// Function to increment count11
const handleIncrement11 = () => {
  count11++;
  totalCount11.innerHTML = "+" + count11;
  incrementCount11.removeEventListener('click', handleIncrement11);
};

// Add click event to buttons
incrementCount11.addEventListener("click", handleIncrement11);
