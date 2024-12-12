// takes human choice
const paper = document.querySelector(".paper");
paper.addEventListener("click", humanSelection = "paper")

const rock = document.querySelector(".rock");
rock.addEventListener("click", (humanSelection = "rock"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (humanSelection = "scissors"));

// generate random computer choice
const paperRockScissors = ["paper", "rock", "scissors"];
let randomRPS = function () {
  // return a random index from array paperRockScissors
  let random = Math.floor(Math.random() * paperRockScissors.length);
  // return the string attached to the index returned by random
  return paperRockScissors[random];
};

// compare both choices
const div = document.createElement("div");

let humanSelection = "";

if (
  (humanSelection === "rock" && computerSelection === "paper") ||
  (humanSelection === "paper" && computerSelection === "scissors") ||
  (humanSelection === "scissors" && computerSelection === "rock")
) {
  computerScore += 1;
} else if (humanSelection === computerSelection) {
  return tie;
} humanScore += 1;

// keep track of both choices and define round limit
let humanScore = 0;
let computerScore = 0;

// announce winner
