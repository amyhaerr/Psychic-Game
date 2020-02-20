// An array of possible letter options
var computerChoices = ["s", "n", "a", "p", "e"];


// Array holds letters guessed
var lettersGuessed = [];

// Variable assigned to hold 5 letters to be guessed
var letterToGuess = null;


// Create variables to hold Wins, Losses, Guesses Left, and Letters Guessed

var wins = 0;
var losses = 0;
var numGuesses = 9;



// Function runs whenever the player presses a key
document.onkeyup = function(event) {

    // Determines key pressed
    var userGuess = event.key;

    // Randomly chooses choice from options in the array
    var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(options.indexOf(userGuess) >-1) {
        if(userGuess===computerGuess) {
            wins++;
            numGuesses=9;
            lettersGuessed=[];
        }
   
        if(userGuess !=computerGuess) {
            numGuesses--;
            lettersGuessed.push(userGuess);
        }
        
        if(numGuesses ===0) {
            numGuesses=9;
            losses++;
            lettersGuessed = [];
        }
   
    };






    // userChoiceText.textContent = "You chose: " + userGuess;
    
    // winsText.textContent = "wins: " + wins;
    // lossesText.textContent = "losses: " + losses;
}