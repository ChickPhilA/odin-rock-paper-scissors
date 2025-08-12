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
            return "win"
        }
        else if(computerChoice == "paper") {
            return "lose"
        }
        else{
            return "tie"
        }
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            computerScore++
            return "lose"
        }
        else if(computerChoice == "paper") {
            return "tie"
        }
        else {
            humanScore++
            return "win"
        }
    }
    else {
        if(computerChoice == "rock") {
            computerScore++
            return "lose"
        }
        else if(computerChoice == "paper") {
            humanScore++
            return "win"
        }
        else {
            return "tie"
        }
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    // initialize the choices as null first
    let humanChoice = null
    let computerChoice = null
    let result = null

    alert("Welcome to Rock, Paper, Scissors! You will play 5 rounds against the computer. Good luck!")
    for(let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        result = playRound(humanChoice, computerChoice, humanScore, computerScore) // passing the score variables to increment them in other functions
        if(result == "win") {
            alert("You won the round!")
            humanScore++
        }
        else if(result == "lose") {
            alert("You lost the round!")
            computerScore++
        }
        else {
            alert("Round resulted in a tie.")
            // do nothing, it's a tie
        }
    }

    // after the 5 games have been played
    if(humanScore > computerScore) {
        alert(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`)
    }
    else if(computerScore > humanScore) {
        alert(`You lose the game! The computer wins with a score of ${humanScore} to ${humanScorecomputerScore}.`)
    }
    else {
        alert(`It's a tie! Both you and the computer scored ${humanScore}.`)
    }
}  


playGame()