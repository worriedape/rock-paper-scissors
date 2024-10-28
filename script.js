function getComputerChoice() {

    function random(number) {
        return Math.floor(Math.random() * 100);
        }

    function choose(rock, paper, scissors) {
        if ( random() <= 33 ) {
         alert("Rock")
        } else if ( random() > 66 ) {
         alert("Paper")
        } else (alert("Scissors"));
        }
        
    choose();
}

function getHumanChoice() {

    let choice = prompt('Add R for rock, P for paper, and S for scissors.');

    if ( choice === "R" ) {
        alert("Rock")
    } else if ( choice === "P") {
        alert("Paper")
    } else if ( choice === "S") {
        alert("Scissors")
    } else (alert("Use only R, P, or S."))
}


function playGame() {
    
 let humanScore = ;

 let computerScore = ;

 function playRound(humanChoice, computerChoice) {

 }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    /*

    let humanChoice = getHumanChoice();

    let computerChoice = getComputerChoice();

    if(humanChoice() )
}

    for (let playRound() = 0, playRound() < 6, playRound()++) {
        playRound();
    }

}