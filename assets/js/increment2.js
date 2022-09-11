// Select increment and decrement buttons
const incrementcount2 = document.getElementById("circle2");

// Select total count2
const totalcount2 = document.getElementById("Total2");

// Variable to track count2
var count2 = 42510;

// Display initial count2 value
totalcount2.innerHTML = "+" + count2;

// Function to increment count2
const handleIncrement2 = () => {
  count2++;
  totalcount2.innerHTML = "+" + count2;
  incrementcount2.removeEventListener('click', handleIncrement2);
};

// Add click event to buttons
incrementcount2.addEventListener("click", handleIncrement2);
