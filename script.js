// keep score track
let humanScore = 0;
let computerScore = 0;
let tie = 0;

// buttons
/*
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
*/
let humanSelection;

const body = document.querySelector("body");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection = button.className;
    playRound();
  });
});

// create <p> textContent of humanSelection vs computerSelection
/*
const paraVersus = document.createElement("p");
paraVersus.classList.add("versus");
paraVersus.textContent = `${humanSelection} vs ${computerSelection}
${humanScore}, ${computerScore}, ${tie}`;

body.appendChild(paraVersus);
*/

// create <p> textContent of humanSelection vs computerSelection
const paraVersus = document.createElement("p");
paraVersus.classList.add("versus");
paraVersus.textContent = "";
body.appendChild(paraVersus);

// scoreboard
const scoreBoard = document.createElement("p");
scoreBoard.textContent = "";
body.appendChild(scoreBoard);

const paperRockScissors = ["paper", "rock", "scissors"];

function playRound() {
  // play round
  //outer: for (let i = 0; ; i++) {
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

  // create <p> textContent of humanSelection vs computerSelection
  //const paraVersus = document.createElement("p");
  //paraVersus.classList.add("versus");
  paraVersus.textContent = `Yours: ${humanSelection} | Computer's: ${computerSelection}`;
  //body.appendChild(paraVersus);

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

  //console.log(humanScore, computerScore, tie);

  //if (humanScore === 3 || computerScore === 3) break outer;
  //}

  // scoreboard
  //const scoreBoard = document.createElement("p");
  scoreBoard.textContent = `You: ${humanScore} | Computer: ${computerScore} | Tie: ${tie}`;
  //body.appendChild(scoreBoard);

  const winner = document.createElement("p");
  //winner.textContent;
  //body.appendChild(winner);

  if (humanScore === 3) {
    winner.textContent = "You win!";
    body.appendChild(winner);
  } else if (computerScore === 3) {
    winner.textContent = "Computer wins!";
    body.appendChild(winner);
  }
}

// announce winner
//let winner = function () {
/*
if (humanScore === 3) {
  console.log("You win!");
} else if (computerScore === 3) {
  console.log("Computer wins!");
}
*/
