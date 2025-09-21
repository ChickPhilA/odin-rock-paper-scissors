/* Functions */

function getComputerChoice() {
    let randomVal = Math.floor((Math.random() * 3) + 1)  // chooses a random, WHOLE NUMBER inclusive from 1 to 3

    if(randomVal === 1) {
        return "rock"
    }
    else if(randomVal === 2) {
        return "paper"
    }
    else {
        return "scissors" // assuming the random value generated here is 3
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: 'rock', 'paper', or 'scissors'?")
    if(choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        choice = choice.toLowerCase() // makes the input case insensitive, accepting any form of input 
        return choice
    }
    else {
        alert("Invalid choice. Please try again.")
        getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let youChose = document.createElement('div')
    youChose.textContent = `You chose: `

    if(humanChoice === "rock") {
        console.log("The player chose rock")
        youChose.textContent += "Rock"

    }

    else if(humanChoice === "paper") {
        console.log("The player chose paper")
        youChose.textCotent += "Paper"
    }
    else {
        console.log("The player chose scissors")
        youChose.textContent += "Scissors"
    }

    document.querySelector('body').insertBefore(youChose, document.querySelector('.results'))

}

// function playGame() {
//     let humanScore = 0
//     let computerScore = 0

//     // initialize the choices as null first
//     let humanChoice = null
//     let computerChoice = null
//     let result = null

//     for(let i = 0; i < 5; i++) {
//         humanChoice = getHumanChoice()
//         computerChoice = getComputerChoice()
//         result = playRound(humanChoice, computerChoice, humanScore, computerScore) // passing the score variables to increment them in other functions
//         if(result == "win") {
//             alert("You won the round!")
//             humanScore++
//         }
//         else if(result == "lose") {
//             alert("You lost the round!")
//             computerScore++
//         }
//         else {
//             alert("Round resulted in a tie.")
//             // do nothing, it's a tie
//         }
//     }

//     // after the 5 games have been played
//     if(humanScore > computerScore) {
//         alert(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`)
//     }
//     else if(computerScore > humanScore) {
//         alert(`You lose the game! The computer wins with a score of ${humanScore} to ${humanScorecomputerScore}.`)
//     }
//     else {
//         alert(`It's a tie! Both you and the computer scored ${humanScore}.`)
//     }
// }  




/* DOM Instance Variables and Event Listeners */

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerScore = document.getElementById('id-score')
const computerScore = document.getElementById('computer-score')

let humanScore = 0;
let compScore = 0;

playerScore.textContent += humanScore
computerScore.textContent += compScore

rock.addEventListener('click', () => playRound("rock", getComputerChoice(), humanScore, compScore))
paper.addEventListener('click', () => playRound("paper", getComputerChoice(), humanScore, compScore))
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice(), humanScore, compScore))