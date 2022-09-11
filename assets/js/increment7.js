// Select increment and decrement buttons
const incrementCount7 = document.getElementById("circle7");

// Select total count7
const totalCount7 = document.getElementById("Total7");

// Variable to track count7
var count7 = 22579;

// Display initial count7 value
totalCount7.innerHTML = "+" + count7;

// Function to increment count7
const handleIncrement7 = () => {
  count7++;
  totalCount7.innerHTML = "+" + count7;
  incrementCount7.removeEventListener('click', handleIncrement7);
};

// Add click event to buttons
incrementCount7.addEventListener("click", handleIncrement7);