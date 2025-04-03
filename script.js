/* ======================
   ROCK PAPER SCISSORS GAME
   ====================== */

// █████ STEP 1: INITIALIZATION █████
console.log("🚀 Game Started!");

// █████ STEP 2: COMPUTER CHOICE █████
function getComputerChoice() {
    const randomNum = Math.random();
    return randomNum < 0.33 ? "rock" : 
           randomNum < 0.66 ? "paper" : "scissors";
}

// █████ STEP 3: HUMAN CHOICE █████
function getHumanChoice(round) {
    let choice;
    do {
        choice = prompt(`🖐️ Round ${round}: rock, paper, or scissors?`)?.toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}

// █████ STEP 4-6: GAME ENGINE █████
function playGame() {
    console.log("\n==================");
    console.log("  NEW GAME STARTED");
    console.log("==================\n");
    
    // █ STEP 4: SCORE TRACKING █
    let scores = { human: 0, computer: 0 };
    
    // █ STEP 5: ROUND LOGIC █
    function playRound(round) {
        console.log(`\n——— ROUND ${round} ———`);
        
        const choices = {
            human: getHumanChoice(round),
            computer: getComputerChoice()
        };
        
        console.log(`👤 You chose: ${choices.human}`);
        console.log(`🤖 Computer chose: ${choices.computer}`);
        
        // Determine winner
        if (choices.human === choices.computer) {
            console.log("👉 It's a tie!");
            return 'tie';
        }
        
        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        
        if (winConditions[choices.human] === choices.computer) {
            scores.human++;
            console.log(`🎉 You win! ${choices.human} beats ${choices.computer}`);
            return 'human';
        } else {
            scores.computer++;
            console.log(`💻 Computer wins! ${choices.computer} beats ${choices.human}`);
            return 'computer';
        }
    }
    
    // █ STEP 6: GAME LOOP █
    for (let round = 1; round <= 5; round++) {
        playRound(round);
        console.log(`📊 Score: You ${scores.human} - ${scores.computer} Computer`);
    }

   
    // Final result
    console.log("\n================");
    console.log("  FINAL RESULT");
    console.log("================\n");
    
    if (scores.human > scores.computer) {
        console.log(`🏆 YOU WIN! (${scores.human}-${scores.computer})`);
    } else if (scores.computer > scores.human) {
        console.log(`😭 COMPUTER WINS (${scores.human}-${scores.computer})`);
    } else {
        console.log(`🤝 IT'S A TIE (${scores.human}-${scores.computer})`);
    }
}

// Start the game
playGame();
