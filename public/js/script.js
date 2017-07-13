$(function(){

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < alphabet.length; i++) {
    $('#buttons-for-letters').append('<div class="btn btn-info letters">'+ alphabet[i]+'</div>');
};

var wordBank = ['david', 'jace', 'richard'];
//split every word inside the array
var randomNumber = Math.floor(wordBank.length * Math.random());
var randomWholeWords = wordBank[randomNumber];
var randomWords = randomWholeWords.split('');
var emptySpacesForDashes = [];
//make dashes equal the number of letters in words
//find the length of the letters in the random words
for (var i = 0; i < randomWords.length; i++) {
    //push _ for every letter to match the length of the word
    emptySpacesForDashes.push('_ ');
}
$('#underscore').append(emptySpacesForDashes);


var letterClicked;

var numberOfLives = 7;

//push underscore that matches length of word
function letterMatched() {
    for (var i = 0; i < randomWords.length; i++) {
        if (letterClicked === randomWords[i]) {
        emptySpacesForDashes[i] = letterClicked;
        }

    $('#underscore').text(emptySpacesForDashes.join(' '));
    } 
};

//if incorrect letter clicked, number of lives goes down
function incorrectLetter() {
    if (randomWholeWords.indexOf(letterClicked) === (-1)) {
            numberOfLives -=1;
        }
        $('#number-of-lives').html('number of lives: ' + numberOfLives); 
    };

function winOrLose() {
    if (numberOfLives < 1) {
        $('#number-of-lives').html('Game Over!');
    }
}
            
            


//if the number of lives is less than 1
//show "Game Over"
//if the whole word is guesses AND there are lives left
//show "You win"

//WHEN I click on the incorrect letter
//if the number of attempts is less than the # of lives
//and the guess is incorrect
//THEN I see the "number of lives" go down

//WHEN I guess a letter
//THEN I see the number of attempts I have left

//WHEN I guess the last correct letter
//THEN I see "You Win!"

//WHEN I make my last attempt
//THEN display "You lose. Try again"

//WHEN I'm finished playing a game
//THEN I can click on "play again"

//WHEN I click on the instruction buttons
//THEN a widow pops up where I can read the instructions of the game

//makes letters clicked appear on the page
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).text();
    letterMatched();
    incorrectLetter();
    winOrLose();
});
//makes letters clicked change colors
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).css('background-color', 'green');
    letterMatched();
});

    
});