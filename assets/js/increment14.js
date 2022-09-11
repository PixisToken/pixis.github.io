// Select increment and decrement buttons
const incrementcount14 = document.getElementById("circle14");

// Select total count14
const totalcount14 = document.getElementById("Total14");

// Variable to track count14
var count14 = 8501;

// Display initial count14 value
totalcount14.innerHTML = "+" + count14;

// Function to increment count14
const handleIncrement14 = () => {
  count14++;
  totalcount14.innerHTML = "+" + count14;
  incrementcount14.removeEventListener('click', handleIncrement14);
};

// Add click event to buttons
incrementcount14.addEventListener("click", handleIncrement14);