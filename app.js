document.readyState(function(){
    var userChoice, computerChoices, computerGuess, wins, losses, ties;
    computerChoices = ["r", "p", "s"];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    wins = 0;
    losses = 0;
    ties = 0;
    document.onkeyup(function () {
        if (userChoice.toLowerCase() === "r" || "p" || "s") {
            if (userChoice === "r" && computerGuess === "p") {
                losses++;
            } else if (userChoice === "p" && computerGuess === "r") {
                wins++;
            } else if (userChoice === "s" && computerGuess === "p") {
                wins++;
            } else if (userChoice === "p" && computerGuess === "s") {
                losses++;
            } else if (userChoice === "r" && computerGuess === "s") {
                wins++;
            } else if (userChoice === "s" && computerGuess === "r") {
                losses++;
            } else {
                ties++;
            }
        }
    })

document.getElementById("game").innerHTML = 
        // "Your choice: " + userChoice +
        // "Computer choice: " + computerChoice +
        // "Wins: " + wins +
        // "Losses: " + losses +
        // "Ties: " + ties
        "hello"
    
})