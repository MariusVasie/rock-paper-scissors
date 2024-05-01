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
    console.log("Comoputer's choice is ", computerChoice);
    return computerChoice;
  }

/*
Stage 2 - Getting the human choice
When the page loads a prompt will appear.
Ask the user to choose between rock, paper, scissors
Log the option chosen by the user
*/

function getHumanChoice() {
    let promptValue = prompt("Choose between rock, paper and scissors");
    let humanChoice = promptValue.toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors")  {
        console.log('Your choice is ', humanChoice);
    } else {
        alert("Your choice is not valid");
    }
    return humanChoice;
}

/*
Stage 3 - Playing a single round
Compare the computer and human values.
Add a point to the winner
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            console.log("Computer wins");
        } else if (computerChoice == "scissors") {
            humanScore++;
            console.log("You win");
        } else {
            console.log("It's a tie");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You win");
        } else if (computerChoice == "scissors") {
            computerScore++;
            console.log("Computer wins");
        } else {
            console.log("It's a tie");
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You win");
        } else if (computerChoice == "paper") {
            computerScore++;
            console.log("Computer wins");
        } else {
            console.log("It's a tie");
        }
    } else {
        alert("Your choice is not valid");
    }
    console.log("Your score:", humanScore, "Computer's score:", computerScore);
  }

  /* Stage 4 - Playing the game 5 times */

  function playGame(gameRuns=5) {
    let humanScore = 0;
    let computerScore = 0;

    for (let step = 0; step < gameRuns; step++) {
        function playRound(humanChoice, computerChoice) {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
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
            } else if (humanChoice == "scissors") {
                if (computerChoice == "rock") {
                    humanScore++;
                    console.log("User wins");
                } else if (computerChoice == "paper") {
                    computerScore++;
                    console.log("Computer wins");
                } else {
                    console.log("It's a tie");
                }
            } else {
                alert("This round is invalid");
            }
            console.log("Your score:", humanScore, "Computer's score:", computerScore);
          }
          playRound();
      }
  }

  playGame();