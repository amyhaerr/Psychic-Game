
var computerChoices = ["s", "n", "a", "p", "e"];
var userGuess = "";
var numGuesses = 6;
var lettersGuessed = [];
var wins = 0;
var losses = 0;





var computerGuess = computerChoices[Math.floor(Math.random()
    * computerChoices.length)];


function resetGame() {
    numGuesses = 6;
    lettersGuessed = [];
    computerGuess = computerChoices[Math.floor(Math.random()
        * computerChoices.length)];
}

document.onkeyup = function (event) {

    var letters = event.key.toLowerCase();


    var userGuess = event.key;


        if (userGuess !== computerGuess) {
            numGuesses--;
            lettersGuessed.push(userGuess);
        }
           else if (userGuess === computerGuess) {
                wins++;
                resetGame()

            } else if (numGuesses === 0) {
                losses++;
                resetGame();
            }

        


        document.getElementById("number-text").textContent = "Guesses Left:" + numGuesses;
        document.getElementById("letters-text").textContent = "Letters you have Guessed:" + lettersGuessed;
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        document.getElementById("losses-text").textContent = "Losses: " + losses;

    };
// }