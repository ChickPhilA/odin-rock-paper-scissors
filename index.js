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
        return choice
    }
    else {
        alert("Invalid choice. Please try again.")
        getHumanChoice()
    }
}