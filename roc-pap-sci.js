const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector("#scissors");

const computerAnswers = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let randomPick = 0;
    
    randomPick = getRandomInt(3);
    return computerAnswers[randomPick];
}

function playRound(){
    if (computerPick === playerPick) {
        alert("Draw! Try again!")
    } else if (computerPick === "rock" && playerPick === "paper") {
        alert("You win! Paper beats Rock!");
        playerScore += 1;
    } else if (computerPick === "rock" && playerPick === "scissors") {
        alert("You Lose! Rock beats Scissors!")
        computerScore += 1;
    } else if (computerPick === "paper" && playerPick === "rock") {
        alert("You Lose! Paper beats Rock!")
        computerScore += 1;
    } else if (computerPick === "paper" && playerPick === "scissors") {
        alert("You win! Scissors beats Paper!")
        playerScore += 1;
    } else if (computerPick === "scissors" && playerPick === "rock") {
        alert("You win! Rock beats Scissors!")
        playerScore += 1;
    } else if (computerPick === "scissors" && playerPick === "paper") {
        alert("You lose! Scissors beats paper!")
        computerScore += 1;
    }

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        alert("You won! Good job!");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
    if (computerScore == 5) {
        alert("You lost, sorry! Better luck next time!");
        computerScore = 0;
        playerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
}

let playerPick = ""
let computerPick = ""

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
    playerPick = "rock";
    computerPick = computerPlay();
    playRound(computerPick, playerPick); 
})

paperButton.addEventListener('click', () => {
    playerPick = "paper";
    computerPick = computerPlay();
    playRound(computerPick, playerPick); 
})

scissorsButton.addEventListener('click', () => {
    playerPick = "scissors";
    computerPick = computerPlay();
    playRound(computerPick, playerPick); 
})