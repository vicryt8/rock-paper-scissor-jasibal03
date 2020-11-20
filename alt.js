var playerScore = 0;
var computerScore = 0;
//                  0       1          2
var selection = ["rock", "paper", "scissors"];
​
for (var gameNum = 0; gameNum < 10; gameNum++) {
    var playerSelection = selection.indexOf(prompt("Your selection"));
    var computerSelection = Math.floor(Math.random() * 3);
    ​
    if (playerSelection === computerSelection) {
        alert("We have a tie!");
    } else if (playerSelection === 0 && computerSelection === 1) {
        alert("You lost, computer chose paper");
        computerScore++;
    } else if (playerSelection === 1 && computerSelection === 2) {
        alert("You lost, computer chose scissors");
        computerScore++;
    } else if (playerSelection === 2 && computerSelection == 0) {
        alert("You lost, computer chose rock");
        computerScore++;
    } else {
        alert("You won, computer chose " + selection[computerSelection]);
        playerScore++;
    }
    ​
    alert("Game: " + (gameNum + 1) + "\nComputer: " + computerScore + "\nPlayer: " + playerScore);
    }
    ​
    if (playerScore > computerScore) {
    alert("Player wins the game!");
    } else {
    alert("Bad luck, computer wins the game :(");
}