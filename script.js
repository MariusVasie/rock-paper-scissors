/*
Stage 1 - Getting the computer choice
When the page loads a random number will be generated between 1, 2 and 3
Each number will be assigned to one of the elements
1 = rock, 2 = paper and 3 = scissors
Log the random element that has been generated
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)+1;
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = "rock";
    } else if (randomNumber == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log('Comoputer choice is ', computerChoice);
  }
getComputerChoice();

/*
Stage 2 - Getting the human choice
When the page loads a prompt will appear.
Ask the user to choose between rock, paper, scissors
Log the option chosen by the user
*/

function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper and scissors");
    console.log('Human choice is ', humanChoice);
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

/*
Stage 3 - Playing a single round
Compare the computer and human values.
Add a point to the winner
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            console.log("Computer wins");
        } else if (computerChoice == "scissors") {
            humanScore++;
            console.log("User wins");
        } else {
            console.log("It's a tie");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("User wins");
        } else if (computerChoice == "scissors") {
            computerScore++;
            console.log("Computer wins");
        } else {
            console.log("It's a tie");
        }
    }
  }