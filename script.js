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

// Step 4:
let humanScore = 0;
let computerScore = 0;

// (Keep your existing functions below)
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return choice;
}

// Step 5:
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    
    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// Example usage:
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// Check updated scores
console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
