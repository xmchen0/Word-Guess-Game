/* spoiler alert: code contains answers to word blanks in the game */

/// VARIABLES
var wordBlank = ["_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _"]
var wordAnswers = ["festivus","spongeworthy","regifter","manhands","shrinkage","rageaholic"]
var guessTries = 10;
var wins = 0;
var currentWord;
var guessLetter = [];
var guessWord = [];
var wrongAnswerCount; 
var numberOfGuesses;

// storing all elements as objects
var totalWins = document.getElementById("totalWins");
var currentWord = document.getElementById("currentWord");
var guessesRemaining = document.getElementById("guessesingRemaining");
var guessLetters = document.getElementById("guessLetters");

/// FUNCTIONS

//1. setup variables and add sections that makes up the game screen

//2. select random variable length of guessWord

function displayScreen() {
    totalWins.innerText = wins;
    currentWord.innerText = "";
    for (var i = 0; i < guessWord.length; i++) {
        currentWord.innerText += guessWord[i];
    }
    guessesRemaining.innerText = guessesRemaining;
    guessLetters.innerText = guessedLetters;
    if(guessesRemaining <= 0) {
        window.prompt("Game Over. Play again? y/n")
    }
};

//3. listen to command from user when keys are pressed

//4. check answers to see if the letter is correct 

//5. check answer to see if the entire word has been solved

//6. otherwise wrong answers means a letter was not found in the word

//7. otherwise a wrong answer will reduce the number of guesses by 1

//8. alert win or lose message displayed


/// EXECUTE GAME