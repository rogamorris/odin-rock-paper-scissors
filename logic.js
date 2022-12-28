game();

function game() {
    let playerWins = 0;
    let compWins = 0;
    // For n iterations (aka "rounds"), get the computer and user choices, then return the result of the round.
    for (let i = 0; i < 3; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Do you want to play rock, paper, or scissors?");
        let result = playRound(playerSelection, computerSelection)
        // Increment playerWins or compWins based on the result
        if(result == "You win!") {
            playerWins = playerWins + 1
        } else if(result == "You lose :(") {
            compWins = compWins + 1
        }
        // Print the result in the console. 
        console.log(">> " + result);
        console.log(" ");
        };
    // Print a summary of the game, including rounds won/lost and overall winner
    console.log("Game Summary:")
    console.log("You won " + playerWins + " rounds.")
    console.log("Computer won " + compWins + " rounds.")
    if(playerWins > compWins) {
        console.log(">> You're the winner")
    } else if(compWins > playerWins) {
        console.log(">> The Computer won the game")
    } else {
        console.log(">> It's a tied game")
    }
}

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
    // Make player and user selection lower case
    compChoice = computerSelection.toLowerCase()
    yourChoice = playerSelection.toLowerCase()

    // Print computer selection and player selection to console
    console.log("Computer plays: " + computerSelection);
    console.log("You play: " + playerSelection);
    
    // Return result of rock, paper, scissors
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