// variables to store information for the game
var computerChoices = ["s", "n", "a", "p", "e"];
var userGuess = "";
var numGuesses = 9;
var lettersGuessed = [];
var wins = 0;
var losses = 0;



// variable to determine computer choice from provided array
var computerGuess = computerChoices[Math.floor(Math.random()
    * computerChoices.length)];

// update guesses left
function countNumGuesses() {
    document.querySelector("#number-text").innerHTML = numGuesses;
}

// takes user guess and join string and visible on screen

function farUserGuesses() {
    document.querySelector("#letters-text").innerHTML = lettersGuessed.join(", ");
}

countNumGuesses();

function resetGame() {
    numGuesses = 9;
    lettersGuessed = [];

    var computerGuess = computerChoices[Math.floor(Math.random()
        * computerChoices.length)];
}

document.onkeyup = function (event) {


    var userGuess = event.key.toLowerCase();

    farUserGuesses();
    countNumGuesses();

    if (userGuess !== computerGuess) {
        numGuesses--;
        lettersGuessed.push(userGuess);
        // document.querySelector("#number-text").innerHTML=numGuesses;

    }
     if (userGuess === computerGuess) {
        wins++;
        numGuesses=9
        // document.querySelector("#wins-text").innerHTML=wins;
        resetGame()

    } 
     if (numGuesses === 0) {
        losses++;
        lettersGuessed = [];
        numGuesses = 9;
        // document.querySelector("#losses-text").innerHTML = losses;
        resetGame();
    }




    document.getElementById("number-text").textContent = "Guesses Left:" + numGuesses;
    document.getElementById("letters-text").textContent = "Letters you have Guessed:" + lettersGuessed;
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;

};
