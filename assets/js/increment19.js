// Select increment and decrement buttons
const incrementcount19 = document.getElementById("circle19");

// Select total count19
const totalcount19 = document.getElementById("Total19");

// Variable to track count19
var count19 = 320;

// Display initial count19 value
totalcount19.innerHTML = "+" + count19;

// Function to increment count19
const handleIncrement19 = () => {
  count19++;
  totalcount19.innerHTML = "+" + count19;
  incrementcount19.removeEventListener('click', handleIncrement19);
};

// Add click event to buttons
incrementcount19.addEventListener("click", handleIncrement19);