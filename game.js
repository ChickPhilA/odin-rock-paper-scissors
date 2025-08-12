let humanScore = 0
let computerScore = 0

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

function playRound(humanChoice, computerChoice) {
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

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

playRound(humanChoice, computerChoice)