// keep score tracks
let humanScore = 0;
let computerScore = 0;
let tie = 0;

outer: for (let i = 0; ; i++) {
  // takes human choice
  let humanSelection = prompt("Choose between rock, paper, and scissors");

  // generate random computer choice
  function computerSelector() {
    const paperRockScissors = ["paper", "rock", "scissors"];
    // return a random index from array paperRockScissors
    let random = Math.floor(Math.random() * paperRockScissors.length);
    // return the string attached to the index returned by random
    return paperRockScissors[random];
  }

  // each time the comparison runs the function calling computerSelector
  // a new random value is returned, making it impossible to compare a
  // consisting value throughout the iteration
  // so we need to assign it to another variable
  let computerSelection = computerSelector();

  //let versus = ;

  console.log(humanSelection, "vs", computerSelection);

  // compare both choices

  //let comparison = () => {
  if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
  } else if (humanSelection === computerSelection) {
    tie += 1;
  } else humanScore += 1;
  //};

  //comparison();

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
