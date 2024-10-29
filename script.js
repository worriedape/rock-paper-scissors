function playGame() {
  let humanScore = 0;

  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    function getComputerChoice() {
      function random(number) {
        return Math.floor(Math.random() * 100);
      }

      function choose() {
        if (random() <= 33) {
          return "rock";
        } else if (random() > 66) {
          return "paper";
        } else return "scissors";
      }
      return choose();
    }

    function getHumanChoice() {
      let choiceOriginal = prompt(
        "Write down your weapon. (Rock, paper, or scissors)"
      );

      let choice = choiceOriginal.toLowerCase();

      if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
      } else alert("Use only rock, paper, or scissors.");
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (
      (humanSelection === "rock" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "rock")
    ) {
      alert(`You lose! ${computerSelection} beats ${humanSelection}.`);
      return computerScore++;
    } else if (
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper") ||
      (humanSelection === "rock" && computerSelection === "scissors")
    ) {
      alert(`You win! ${humanSelection} beats ${computerSelection}.`);
      return humanScore++;
    } else alert(`You're even!`);
  }

}

playRound();
