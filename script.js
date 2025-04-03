console.log("Hello World");
function getComputerChoice() {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();
    
    // Return "rock", "paper", or "scissors" based on the random number
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Test the function
console.log(getComputerChoice()); // Randomly logs "rock", "paper", or "scissors"
