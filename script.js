// Step 1:
console.log("Hello World");

// Step 2:
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
console.log(getComputerChoice());

// Step 3:
function getHumanChoice() {
    // Prompt the user for their choice
    const choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return choice;
}

// Test the function
console.log(getHumanChoice());

// To make functions always available
window.getHumanChoice = function() {
    return prompt("Choose rock, paper, or scissors:").toLowerCase();
};
