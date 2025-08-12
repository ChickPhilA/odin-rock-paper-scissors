function getComputerChoice() {
    let randomVal = Math.floor((Math.random() * 3) + 1)  // chooses a random, WHOLE NUMBER inclusive from 1 to 3

    if(randomVal == 1) {
        return "rock"
    }
    else if(randomVal == 2) {
        return "paper"
    }
    else {
        return "scissors" // assuming the random value generated here is 3
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: 'rock', 'paper', or 'scissors'?")
    if(choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        choice = choice.toLowerCase() // makes the input case insensitive, accepting any form of input 
        return choice
    }
    else {
        alert("Invalid choice. Please try again.")
        getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    // we start comparing the values here

    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            humanScore++
            return "You win! Rock crushes scissors."
        }
        else if(computerChoice == "paper") {
            computerScore++
            return "You lose! Paper covers rock."
        }
        else{
            return "It's a tie! Both chose rock."
        }
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            computerScore++
            return "You lose! Scissors cuts paper."
        }
        else if(computerChoice == "paper") {
            return "It's a tie! Both chose paper."
        }
        else {
            humanScore++
            return "You win! Paper covers rock."
        }
    }
    else {
        if(computerChoice == "rock") {
            computerScore++
            return "You lose! Rock crushes scissors."
        }
        else if(computerChoice == "paper") {
            humanScore++
            return "You win! Scissors cuts paper."
        }
        else {
            return "It's a tie! Both chose scissors."
        }
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    // initialize the choices as null first
    let humanChoice = null
    let computerChoice = null

    for(let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice, humanScore, computerScore) // passing the score variables to increment them in other functions
    }

    // after the 5 games have been played
    if(humanScore > computerScore) {
        alert(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`)
    }
    else if(computerScore > humanScore) {
        alert(`You lose the game! The computer wins with a score of ${computerScore} to ${humanScore}.`)
    }
    else {
        alert(`It's a tie! Both you and the computer scored ${humanScore}.`)
    }
}  


playGame()