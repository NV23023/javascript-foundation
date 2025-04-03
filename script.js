// Step 1:
console.log("Hello World");

// Step 2:
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors";
}

// Step 3:
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:").toLowerCase();
}

// Step 4:
let humanScore = 0;
let computerScore = 0;

// Step 5:
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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

// Execute ONE round (only one prompt will appear)
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
