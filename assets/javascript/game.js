// An array of possible letter options
var computerChoices = ["s", "n", "a", "p", "e",];



var userGuess = "";

// Create variables to hold Wins, Losses, Guesses Left, 
// and Letters Guessed

var wins = 0;
var losses = 0;
var numGuesses = 6;

// Array holds letters guessed
var lettersGuessed = [];



// function renderlettersGuessed(){
//     if (lettersGuessedIndex <= lettersGuessed.length) {

//     }

// renderlettersGuessed();
// updateScore();

// Function runs whenever the player presses a key
document.onkeyup = function(event) {

    // Determines key pressed
    var userGuess = event.key;

    // Randomly chooses choice from options in the array
    var computerGuess = computerChoices[Math.floor(Math.random() 
        * computerChoices.length)];

    // var options = ["s", "n", "a", "p", "e",];
    

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 6;
            lettersGuessed = [];
        }

        if (userGuess = computerGuess) {
            numGuesses--;
            lettersGuessed.push(userGuess);
        }

        if (numGuesses === 0) {
            numGuesses = 6;
            losses++;
            lettersGuessed = [];
       }


       
          }
};


 