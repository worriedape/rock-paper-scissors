// keep score track
let humanScore = 0;
let computerScore = 0;
let tie = 0;

// buttons
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
const paraVersus = document.createElement("p");
paraVersus.classList.add("versus");
paraVersus.textContent = "";
body.appendChild(paraVersus);

// scoreboard
const scoreBoard = document.createElement("p");
scoreBoard.textContent = "";
body.appendChild(scoreBoard);

if (((humanScore = 0), (computerScore = 0), (tie = 0))) {
  winner.textContent = "";
}

// announce winner
const winner = document.createElement("p");
winner.textContent;
body.appendChild(winner);

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
    return paperRockScissors[random];
  }

  let computerSelection = computerSelector();

  paraVersus.textContent = `Yours: ${humanSelection} | Computer's: ${computerSelection}`;

  // comparison
  if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
  } else if (humanSelection === computerSelection) {
    tie++;
  } else humanScore++;

  //if (humanScore === 3 || computerScore === 3) break outer;
  //}

  // scoreboard
  scoreBoard.textContent = `You: ${humanScore} | Computer: ${computerScore} | Tie: ${tie}`;

  if (humanScore === 3) {
    winner.textContent = "You win!";
    (humanScore = 0), (computerScore = 0), (tie = 0);
  } else if (computerScore === 3) {
    winner.textContent = "Computer wins!";
    (humanScore = 0), (computerScore = 0), (tie = 0);
  }

  if (
    winner.textContent === "You win!" ||
    winner.textContent === "Computer wins!"
  ) {
    scoreBoard.textContent = `You: ${humanScore} | Computer: ${computerScore} | Tie: ${tie}`;
    /*setTimeout(
      ((humanScore = 0),
      (computerScore = 0),
      (tie = 0),
      (winner.textContent = "")),
      3000
    );
    */
  }
}
