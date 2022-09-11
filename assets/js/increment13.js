// Select increment and decrement buttons
const incrementcount13 = document.getElementById("circle13");

// Select total count13
const totalcount13 = document.getElementById("Total13");

// Variable to track count13
var count13 = 11025;

// Display initial count13 value
totalcount13.innerHTML = "+" + count13;

// Function to increment count13
const handleIncrement13 = () => {
  count13++;
  totalcount13.innerHTML = "+" + count13;
  incrementcount1313.removeEventListener('click', handleIncrement13);
};

// Add click event to buttons
incrementcount13.addEventListener("click", handleIncrement13);
