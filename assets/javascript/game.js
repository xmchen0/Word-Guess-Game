/* UofT Bootcamp 2019 - Word-Guess-Game */

/* Spoiler Alert: The following code contains answers to word blanks in the game */

/// GLOBAL VARIABLES
// ===========================================================================================================

var wordAnswers = ["festivus","spongeworthy","regifter","manhands","shrinkage","rageaholic"]
var blanks = 0;
var currentWord = "";
var guessLetterBlanks = []; // i.e. _ _ _ _ _
var lettersinWord = [];
var wrongLetters = [];

// trackers
var winCount = 0;
var lossCount = 0;
var guessTries = 9;

/// FUNCTIONS
// ===========================================================================================================

// 1. setup variables and add sections that makes up the game screen
function startGame() {

    // 1.1 make sure a word is selected
    // 1.1 use Math.floor to round the random number down to the nearest whole
    // 1.1 split words into an array of individual letters
    // 1.1 get how many blanks are required for this word
    currentWord = wordAnswers[Math.floor(Math.random() * wordAnswers.length)];
    lettersinWord = currentWord.split("");
    blanks = lettersinWord.length;
    
    // 1.2 reset number of guess
    // 1.2 reset wrong guesses are back to xero
    // 1.2 reset guessLetterBlanks are cleared out
    guessTries = 9;
    wrongLetters = [];
    guessLetterBlanks = []; 

    // 1.3 populate blanks and correct guesses with right number of blanks via for loop
    for (var i = 0; i < blanks; i++) {
        guessLetterBlanks.push("_");
    }

    // 1.4 get HTML element to store as objects to update blanks (note: .join elements commas)
    document.getElementById("wordToGuess").innerHTML = guessLetterBlanks.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessTries;
    document.getElementById("totalWins").innerHTML = winCount;
    document.getElementById("totalLosses").innerHTML = lossCount;
};

// 2. check letter if it exist in the word, if so where in the word to populate the blank

function checkLetters(letter) {

    // 2.1 check letter in word
    var isLetterinWord = false;
        for (var i = 0; i < blanks; i++) {
            if(currentWord[i] == letter) {
                isLetterinWord = true;
            }
        }

    // 2.2 if letter exists in word, 
    // 2.2 locate it by using for loop
    if (isLetterinWord) {
        for (var i = 0; i < blanks; i++) {
            if(currentWord[i] == letter) {
                guessLetterBlanks[i] = letter;
            }
        }
    } 

    // 2.3 otherwise if letters does not exist in the word, 
    // 2.3 add wrong letter guesses wrong 
    else {
        wrongLetters.push(letter);
        guessTries--;
    }

    // testing
    console.log(guessLetterBlanks)
}

// 3. display scoreboard
function roundComplete() {

    // testing
    console.log("Win count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessTries);

    // 3.1 if blanks matches to the sting, 
    // 3.1 increment winCount by 1, 
    // 3.1 display alert player won,
    // 3.1 get html to update the win counter,
    // 3.1 run startGame function
    if (lettersinWord.toString() == guessLetterBlanks.toString()) {
        winCount++;
        alert("Congratulations! You Won!");
        document.getElementById("totalWins").innerHTML = winCount;
        startGame();
    }

    // 3.2 if blanks does not match to the string, 
    // 3.2 increment lossCount by 1, 
    // 3.2 display alert player lost,
    // 3.2 get html to update the loss counter,
    // 3.2 run startGame function
    else if (guessTries == 0) {
        lossCount++;
        alert("You Lost! Try Again.");
        document.getElementById("playerGuesses").innerHTML = lossCount;
        startGame();
    }

    // 3.3 get html elements to store as objects to update counter
    document.getElementById("guessesRemaining").innerHTML = guessTries;
    document.getElementById("wordToGuess").innerHTML = guessLetterBlanks.join(" ");
    document.getElementById("playerGuesses").innerHTML = wrongLetters.join(" ");
    
}

/// MAIN PROCESS
// ===========================================================================================================

// initiate the code for the first time
startGame();

// add event handle to capture user input
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}
