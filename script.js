function playGame() {

    let humanScore = 0;

    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        function getComputerChoice() {

            function random(number) {
                return Math.floor(Math.random() * 100);
            }

            function choose(rock, paper, scissors) {
                if (random() <= 33) {
                    return ("rock")
                } else if (random() > 66) {
                    return ("paper")
                } else return ("scissors");
            }

        }

        function getHumanChoice() {

            let choiceOriginal = prompt('Write down your weapon. (Rock, paper, or scissors)');

            let choice = choiceOriginal.toLowerCase();

            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return (/*score eg 'Your ${choice} against ${getComputerChoice} */)
            } else (alert("Use only rock, paper, or scissors."))

        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);


        for (let playRound = 0; playRound < 6; playRound++) {
            playRound();
        }

    }
}