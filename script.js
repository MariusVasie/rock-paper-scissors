/*
Stage 1
When the page loads a random number will be generated between 1, 2 and 3
Each number will be assigned to one of the elements
1 = rock, 2 = paper and 3 = scissors
Log the random element that has been generated
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)+1;
    console.log('Random number is ',randomNumber);
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = "Rock";
    } else if (randomNumber == 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log('Comoputer choice is ', computerChoice);
  }
getComputerChoice();

/*
Stage 2
When the page loads a prompt will appear.
The user is asked to choose between rock, paper, scissors
He will have to enter 1 for rock, 2 for paper or 3 for scissors
Log the option chosen by the user
*/

function getHumanChoice() {
    let promptValue = prompt("Choose between rock, paper and scissors. Type 1 for rock, 2 for paper, or 3 for scissors");
    console.log("Promp value is ",promptValue);
    let humanChoice;
    if (promptValue === "1") {
        humanChoice = "Rock";
    } else if (promptValue === "2") {
        humanChoice = "Paper";
    } else if (promptValue === "3") {
        humanChoice = "Scissors";
    } else {
        alert("Your input is not valid.");
    }
    console.log('Human choice is ', humanChoice);
}
getHumanChoice();