// Select increment and decrement buttons
const incrementcount18 = document.getElementById("circle18");

// Select total count18
const totalcount18 = document.getElementById("Total18");

// Variable to track count18
var count18 = 435;

// Display initial count18 value
totalcount18.innerHTML = "+" + count18;

// Function to increment count18
const handleIncrement18 = () => {
  count18++;
  totalcount18.innerHTML = "+" + count18;
  incrementcount18.removeEventListener('click', handleIncrement18);
};

// Add click event to buttons
incrementcount18.addEventListener("click", handleIncrement18);