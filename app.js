
var userChoice, computerChoices, computerGuess, wins, losses, ties;

computerChoices = ["r", "p", "s"];
wins = 0;
losses = 0;
ties = 0;
userChoice = "";
document.addEventListener("keyup", function () {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userChoice = event.key;
    if (userChoice === "r" || userChoice ==="p" || userChoice ==="s") {
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
        } else if (userChoice === computerGuess) {
            ties++;
        }
        var html =
            "<p>You chose: " + userChoice + "</p>" +
            "<p>The computer chose: " + computerGuess + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>ties: " + ties + "</p>";

        document.getElementById("game").innerHTML = html;
    }

})



