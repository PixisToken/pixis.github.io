// Select increment and decrement buttons
const incrementCount10 = document.getElementById("circle10");

// Select total count10
const totalCount10 = document.getElementById("Total10");

// Variable to track count10
var count10 = 17895;

// Display initial count10 value
totalCount10.innerHTML = "+" + count10;

// Function to increment count10
const handleIncrement10 = () => {
  count10++;
  totalCount10.innerHTML = "+" + count10;
  incrementCount10.removeEventListener('click', handleIncrement10);
};

// Add click event to buttons
incrementCount10.addEventListener("click", handleIncrement10);
