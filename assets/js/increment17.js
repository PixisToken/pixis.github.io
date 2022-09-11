// Select increment and decrement buttons
const incrementCount17 = document.getElementById("circle17");

// Select total count17
const totalCount17 = document.getElementById("Total17");

// Variable to track count17
var count17 = 578;

// Display initial count17 value
totalCount17.innerHTML = "+" + count17;

// Function to increment count17
const handleIncrement17 = () => {
  count17++;
  totalCount17.innerHTML = "+" + count17;
  incrementCount17.removeEventListener('click', handleIncrement17);
};

// Add click event to buttons
incrementCount17.addEventListener("click", handleIncrement17);