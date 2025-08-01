function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else if (x === 3) {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice.toLowerCase() === "rock") {
        return "Rock";
    } else if (choice.toLowerCase() === "paper") {
        return "Paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie! Both Choose " + humanChoice);
        } else if (
            humanChoice === "Rock" && computerChoice === "Scissors" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Scissors" && computerChoice === "Paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
    }
    
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("You lose! " + humanScore + " to " + computerScore);
    }
}

playGame();