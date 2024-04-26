/*
Stage 1
When the page loads a random number will be generated between 1, 2 and 3
Each number will be assigned to one of the elements
1 = rock, 2 = paper and 3 = scissors
Log the random element that has been generated
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)+1;
    console.log(randomNumber)
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = "Rock";
    } else if (randomNumber == 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
  }
getComputerChoice();