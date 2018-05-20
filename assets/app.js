
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
            document.getElementById("announce").innerHTML = "You lost!";
        } else if (userChoice === "p" && computerGuess === "r") {
            wins++;
            document.getElementById("announce").innerHTML = "You win!!!!";
        } else if (userChoice === "s" && computerGuess === "p") {
            wins++;
            document.getElementById("announce").innerHTML = "You win!!!!";
        } else if (userChoice === "p" && computerGuess === "s") {
            losses++;
            document.getElementById("announce").innerHTML = "You lost!";
        } else if (userChoice === "r" && computerGuess === "s") {
            wins++;
            document.getElementById("announce").innerHTML = "You win!!!!";
        } else if (userChoice === "s" && computerGuess === "r") {
            losses++;
            document.getElementById("announce").innerHTML = "You lost!";
        } else if (userChoice === computerGuess) {
            ties++;
            document.getElementById("announce").innerHTML = "You tied!";
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



