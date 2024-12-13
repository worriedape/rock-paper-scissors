// keep score track
let humanScore = 0;
let computerScore = 0;
let tie = 0;

// buttons
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");

const buttons = document.querySelectorAll("button");
buttons.addEventListener("click", humanSelection = div.getAttribute("class"));

// create <p> textContent of humanSelection vs computerSelection
const paraVersus = document.createElement("p");

// scoreboard
const scoreBoard = document.createElement("p"); 

let humanSelection;

const paperRockScissors = ["paper", "rock", "scissors"];

// play round
outer: for (let i = 0; ; i++) {
  // takes human choice
  //let humanSelection = prompt("Choose between rock, paper, and scissors");

  /*
  if (!paperRockScissors.includes(humanSelection.toLowerCase())) {
    alert("Input only: rock, paper, or scissors");
    continue outer;
  }
    */

  // generate random computer choice
  function computerSelector() {
    // return a random index from array paperRockScissors
    let random = Math.floor(Math.random() * paperRockScissors.length);
    // return the string attached to the index returned by random
    return paperRockScissors[random];
  }

  // check funtion declaration vs expression
  // each time the comparison runs the function calling computerSelector
  // a new random value is returned, making it impossible to compare a
  // consisting value throughout the iteration
  // so we need to assign it to another variable
  let computerSelection = computerSelector();

  //let versus = ;
  console.log(humanSelection, "vs", computerSelection);

  //let comparison = () => {
  if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    // from x += 1; to x++
    computerScore++;
  } else if (humanSelection === computerSelection) {
    tie++;
  } else humanScore++;
  //};

  console.log(humanScore, computerScore, tie);

  if (humanScore === 3 || computerScore === 3) break outer;
}

// announce winner
//let winner = function () {
if (humanScore === 3) {
  console.log("You win!");
} else if (computerScore === 3) {
  console.log("Computer wins!");
}
