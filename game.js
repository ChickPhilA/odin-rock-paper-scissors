/* DOM Instance Variables and Event Listeners */

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerScore = document.getElementById('id-score')
const computerScore = document.getElementById('computer-score')
const finalResult = document.getElementById('final-result')

let resultText = document.createElement('div') // for displaying the result of each round

let youChose = document.createElement('div') // for displaying what the player chose
document.querySelector('#you-chose').appendChild(youChose)

let cpu = document.createElement('div') // for displaying what the computer chose
let cpuChoice = document.getElementById('computer-chose')
cpuChoice.appendChild(cpu)

// score/round variables
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
        return "scissors"
    }
}

function determineWinner(humanChoice, computerChoice) {
    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + computerChoice)

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

function annoucneWinner() {
    if(humanScore === compScore) {
        finalResult.textContent = "The game is a tie!"
    }
    else if(humanScore > compScore) {
        finalResult.textContent = "Congratulations! You win the game!"
    }
    else {
        finalResult.textContent = "The computer wins the game! Better luck next time!"
    }

}

// This function will sequence a single round but will progress the whole game itself
function playRound(humanChoice, computerChoice) {
    if(round > 10) {
        return // stops the game after 10 rounds
    }
    else {
        let roundDisplay = document.getElementById('round-number')
        roundDisplay.textContent = "Round " + round + "/10"
    }

    youChose.textContent = "You chose: "

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

    let cpuResponse = ""

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

    cpu.textContent = "The CPU has chosen: " + cpuResponse

    let result = determineWinner(humanChoice, computerChoice)
    resultText.textContent = `Round ${round} Result: `

    if(result == "Player") {
        resultText.textContent += "You win this round!"
    }
    else if(result == "Computer") {
        resultText.textContent += "The computer wins this round!"
    }
    else {
        resultText.textContent += "It's a tie!"
    }

    round++
    document.querySelector('.selection').appendChild(resultText)
    
    // if we've reached the last round, announce the winner of the game
    if(round > 10) {
        annoucneWinner()
    }
}


rock.addEventListener('click', () => playRound("rock", getComputerChoice()))
paper.addEventListener('click', () => playRound("paper", getComputerChoice()))
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()))