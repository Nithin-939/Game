// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Function to handle option image click
const handleOptionClick = (e) => {
  const clickedImage = e.currentTarget;
  
  // Set active class for clicked image
  optionImages.forEach(image => image.classList.remove("active"));
  clickedImage.classList.add("active");

  // Set initial state
  userResult.src = cpuResult.src = "images/rock.png";
  result.textContent = "Wait...";
  gameContainer.classList.add("start");

  // Delay result calculation
  setTimeout(() => {
    gameContainer.classList.remove("start");
    
    // Set user image to the clicked option image
    const imageSrc = clickedImage.querySelector("img").src;
    userResult.src = imageSrc;

    // Generate a random number for CPU choice
    const randomNumber = Math.floor(Math.random() * optionImages.length);
    cpuResult.src = optionImages[randomNumber].querySelector("img").src;

    // Update result text based on user and CPU choices
    updateResult(imageSrc, cpuResult.src);
  }, 1000); // Adjust timeout duration as needed
};

// Function to update the result text based on choices
const updateResult = (userChoice, cpuChoice) => {
  // Logic to determine the winner based on userChoice and cpuChoice
  // For example:
  if (userChoice === cpuChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (userChoice.includes("rock") && cpuChoice.includes("scissors")) ||
    (userChoice.includes("scissors") && cpuChoice.includes("paper")) ||
    (userChoice.includes("paper") && cpuChoice.includes("rock"))
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "CPU wins!";
  }
};

// Attach click event listeners to each option image
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});