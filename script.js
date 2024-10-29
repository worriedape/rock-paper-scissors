function playGame() {
  let humanScore = 0;

  let computerScore = 0;

  if (humanScore == 5 && computerScore == 5) for (let i = 0; i < 6; i++) {}

  let playO = playRound();

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

    let lose = `You lose! ${computerSelection} beats ${humanSelection}.`;
    let win = `You win! ${humanSelection} beats ${computerSelection}.`;

    if (
      (humanSelection === "rock" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "rock")
    ) {
      alert(lose);
    } else if (humanSelection === computerSelection) {
      alert(`It's a match. You both picked ${humanSelection}.`);
    } else alert(win);
  }

  playRound();
}
