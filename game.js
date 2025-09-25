/* DOM Instance Variables and Event Listeners */

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerScore = document.getElementById('id-score')
const computerScore = document.getElementById('computer-score')

let resultText = document.createElement('div')
resultText.textContent = `Round ${round} Result: `

let humanScore = 0;
let compScore = 0;
let round = 1;

playerScore.textContent += humanScore
computerScore.textContent += compScore


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

function determineWinner(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("It's a tie!")
        return "Tie"
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win this round!")
                humanScore++
                playerScore.textContent = "Player Score: " + humanScore
                return "Player"
            }
    else {
        console.log("The computer wins this round!")
        compScore++
        computerScore.textContent = "Computer Score: " + compScore
        return "Computer"
    }
}

// This function will sequence a single round but will progress the whole game itself
function playRound(humanChoice, computerChoice) {
    let youChose = document.createElement('div')
    youChose.textContent = `You chose: `

    if(humanChoice === "rock") {
        console.log("The player chose rock")
        youChose.textContent += "🪨"
    }

    else if(humanChoice === "paper") {
        console.log("The player chose paper")
        youChose.textContent += "📄"
    }
    else {
        console.log("The player chose scissors")
        youChose.textContent += "✂️"
    }

    // A sequence of the choices will start here

    document.querySelector('#you-chose').appendChild(youChose)

    let cpu = document.createElement('div')
    let cpuChoice = document.getElementById('computer-chose')

    if(computerChoice === "rock") {
        console.log("The CPU chose rock")
        cpuResponse = "🪨"
    }
    
    else if(computerChoice === "paper") {
        console.log("The CPU chose paper")
        cpuResponse = "📄"
    }
    else {
        console.log("The CPU chose scissors")
        cpuResponse = "✂️"
    }

    cpu.textContent = "The CPU has chosen " + cpuResponse
    cpuChoice.appendChild(cpu)

    let result = determineWinner()

    if(result == "player") {
        resultText.textContent += "You win this round!"
    }
    else if(result == "computer") {
        resultText.textContent += "The computer wins this round!"
    }
    else {
        resultText.textContent += "It's a tie!"
    }
    document.querySelector('.selection').appendChild(resultText)
}


rock.addEventListener('click', () => playRound("rock", getComputerChoice()))
paper.addEventListener('click', () => playRound("paper", getComputerChoice()))
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()))