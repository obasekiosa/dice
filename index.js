var player1 = 1 + Math.floor(Math.random() * 6);
var player2 = 1 + Math.floor(Math.random() * 6);


var playerOneDice = `dice${player1}.png`;
var playerTwoDice = `dice${player2}.png`;


document.getElementsByClassName("img1")[0].setAttribute("src", `./images/${playerOneDice}`);
document.getElementsByClassName("img2")[0].setAttribute("src", `./images/${playerTwoDice}`);

var result;

if (player1 > player2) {
    result = "🚩Player 1 Wins";
} else if (player2 > player1) {
    result = "Player 2 Wins🚩";
} else {
    result = "Draw\n🏳️";
}

document.getElementsByTagName("h1")[0].textContent = result