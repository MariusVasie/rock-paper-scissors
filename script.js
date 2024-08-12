let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
resetBtn.addEventListener("click", resetGame);

const humanResult = document.getElementById("human-choice");
const computerResult = document.getElementById("computer-choice");
const roundWinner = document.getElementById("round-winner");
const humanRoundScore = document.getElementById("human-score");
const computerRoundScore = document.getElementById("computer-score");
const gameWinner = document.getElementById("game-winner");
humanRoundScore.textContent = humanScore;
computerRoundScore.textContent = computerScore;



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
    // console.log("Comoputer's choice is ", computerChoice);
    return computerChoice;
  }

function getHumanChoice(e) {
    // let promptValue = prompt("Choose between rock, paper and scissors");
    let humanChoice = e.target.innerText.toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors")  {
        // console.log('Your choice is', humanChoice);
    } else {
        alert("Your choice is not valid");
    }
    return humanChoice;
}

function playRound(e) {
    let humanChoice = getHumanChoice(e);
    humanResult.textContent = humanChoice;
    let computerChoice = getComputerChoice();
    computerResult.textContent = computerChoice;
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            // console.log("Computer wins");
            roundWinner.textContent = "Computer";
            computerRoundScore.textContent = computerScore;
        } else if (computerChoice == "scissors") {
            humanScore++;
            // console.log("You win");
            roundWinner.textContent = "You";
            humanRoundScore.textContent = humanScore;
        } else {
            // console.log("It's a tie");
            roundWinner.textContent = "It's a tie";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            // console.log("You win");
            roundWinner.textContent = "You";
            humanRoundScore.textContent = humanScore;
        } else if (computerChoice == "scissors") {
            computerScore++;
            // console.log("Computer wins");
            roundWinner.textContent = "Computer";
            computerRoundScore.textContent = computerScore;
        } else {
            // console.log("It's a tie");
            roundWinner.textContent = "It's a tie";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            humanScore++;
            // console.log("You win");
            roundWinner.textContent = "You";
            humanRoundScore.textContent = humanScore;
        } else if (computerChoice == "paper") {
            computerScore++;
            // console.log("Computer wins");
            roundWinner.textContent = "Computer";
            computerRoundScore.textContent = computerScore;
        } else {
            // console.log("It's a tie");
            roundWinner.textContent = "It's a tie";
        }
    } else {
        alert("Your choice is not valid");
    }
    console.log("Your score:", humanScore, "Computer's score:", computerScore);

    if  (computerScore == 5) {
        gameWinner.textContent = "Computer wins the game";
    } else if (humanScore == 5) {
        gameWinner.textContent = "You win the game";
    }

  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanResult.textContent = "";
    computerResult.textContent = "";
    roundWinner.textContent = "";
    computerRoundScore.textContent = computerScore;
    roundWinner.textContent = "";
    humanRoundScore.textContent = humanScore;
  }
  



