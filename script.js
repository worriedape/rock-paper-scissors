// takes human choice
let humanSelection;

const paper = document.querySelector(".paper");
paper.addEventListener("click", (humanSelection = "paper"));

const rock = document.querySelector(".rock");
rock.addEventListener("click", (humanSelection = "rock"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (humanSelection = "scissors"));

// generate random computer choice
let computerSelection = function () {
  const paperRockScissors = ["paper", "rock", "scissors"];
  // return a random index from array paperRockScissors
  let random = Math.floor(Math.random() * paperRockScissors.length);
  // return the string attached to the index returned by random
  return paperRockScissors[random];
};

// keep track of both choices and define round limit
let humanScore = 0;
let computerScore = 0;
// compare both choices
//const div = document.createElement("div");
let comparison = function () {
  if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
  } else if (humanSelection === computerSelection) {
    return "tie";
  }
  humanScore += 1;
};

// announce winner
if (humanScore === 3) {
  return "You win!";
} else if (computerScore === 3) {
  return "Computer wins!";
}
