// Select increment and decrement buttons
const incrementCount3 = document.getElementById("circle3");

// Select total count3
const totalCount3 = document.getElementById("Total3");

// Variable to track count3
var count3 = 35120;

// Display initial count3 value
totalCount3.innerHTML = "+" + count3;

// Function to increment count3
const handleIncrement3 = () => {
  count3++;
  totalCount3.innerHTML = "+" + count3;
  incrementCount3.removeEventListener('click', handleIncrement3);
};

// Add click event to buttons
incrementCount3.addEventListener("click", handleIncrement3);