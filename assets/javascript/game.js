
var computerChoices = "";
var userGuess = "";
var numGuesses = 6;
var lettersGuessed = [];
var wins = 0;
var losses = 0;


var computerChoices = ["s", "n", "a", "p", "e"];


var computerGuess = computerChoices[Math.floor(Math.random()
    * computerChoices.length)];


function resetGame() {
    numGuesses = 6;
    lettersGuessed = [];
    randomLetterChoice();
}

document.onkeyup = function (event) {

    var letters = event.key.toLowerCase();
    // lettersGuessed.push(letter);;

    var userGuess = event.key;

    if (letters.indexOf(userGuess.toLowerCase()) !== -1) {

        if (userGuess !== computerChoices) {
            numGuesses--;
            lettersGuessed.push(userGuess);

            if (userGuess === computerChoices) {
                wins++;
                resetGame()

            } if (numGuesses === 0) {
                losses++;
                resetGame();
            }

        }


        document.getElementById("number-text").textContent = "Guesses Left:" + numGuesses;
        document.getElementById("letters-text").textContent = "Letters you have Guessed:" + lettersGuessed;
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        document.getElementById("losses-text").textContent = "Losses: " + losses;

    };
}