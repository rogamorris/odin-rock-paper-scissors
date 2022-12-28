game();

function game() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Do you want to play rock, paper, or scissors?");
    playRound(playerSelection, computerSelection);
    console.log("Computer plays: " + computerSelection);
    console.log("You play: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection))
};

function getComputerChoice() {
    randomNumber = Math.random() * 100
    if(randomNumber < 33) {
        return "Rock"
    } else if(randomNumber < 66) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

function playRound(playerSelection, computerSelection) {
    compChoice = computerSelection.toLowerCase()
    yourChoice = playerSelection.toLowerCase()
    if(yourChoice == "rock" && compChoice == "paper") {
        return "You lose :("
    } else if(yourChoice == "rock" && compChoice == "scissors") {
        return "You win!"
    } else if(yourChoice == "paper" && compChoice == "rock") {
        return "You win!"
    } else if(yourChoice == "paper" && compChoice == "scissors") {
        return "You lose :("
    } else if(yourChoice == "scissors" && compChoice == "rock") {
        return "You lose :("
    } else if(yourChoice == "scissors" && compChoice == "paper") {
        return "You win!"
    } else {
        return "It's a tie!"
    }
};
