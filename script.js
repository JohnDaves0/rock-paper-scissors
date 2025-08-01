let humanScore = 0;
let computerScore = 0;

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


//console.log(getComputerChoice());
//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Both Choose " + humanChoice);
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats rock.");
        humanScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beat paper.");
        computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats paper.");
        humanScore += 1;
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));