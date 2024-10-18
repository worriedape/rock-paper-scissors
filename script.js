function getComputerChoice() {

    function random(number) {
        return Math.floor(Math.random() * 100);
        }

    function choose(rock, paper, scissors) {
        if ( random() <= 33 ) {
         alert("Rock")
        } else if ( random() >= 34 && random() <= 66 ) {
         alert("Paper")
        } else (alert("Scissors"));
        }
        
    choose();
}
