$(function(){
//create a container with the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//display the alphabet on the page
for (var i = 0; i < alphabet.length; i++) {
    $('#buttons-for-letters').append('<div class="btn btn-info letters">'+ alphabet[i]+'</div>');
};
//create button for each letter

//WHEN I click on the instruction buttons
//THEN a widow pops up where I can read the instructions of the game

//create lines that match the length of the word
//create an array for the word bank
var wordBank = ['david', 'jace', 'richard'];
//pick random words
//split every word inside the array
var randomNumber = Math.floor(wordBank.length * Math.random());
var randomWords = wordBank[randomNumber].split('');
var emptySpacesForDashes = [];
//make dashes equal the number of letters in words
//find the length of the letters in the random words
for (var i = 0; i < randomWords.length; i++) {
    //push _ for every letter
    emptySpacesForDashes.push('_ ');
}
$('#underscore').append(emptySpacesForDashes);


var letterClicked;
//determine the number of lives
var numberOfLives = 7;

//if letter clicked equals to letter in random word
function letterMatched() {
for (var i = 0; i < randomWords.length; i++) {
    if (letterClicked === randomWords[i]) {
    emptySpacesForDashes[i] = letterClicked;
    }
$('#underscore').text(emptySpacesForDashes.join(' '));
}
};
function incorrectLetter() {
if (!(letterClicked === randomWords[i])) {
    numberOfLives -= 1;
    console.log(numberOfLives);
}
$('#number-of-lives').html('number of lives: ' + numberOfLives);
};

//function that updates the number of lives on screen


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

//makes letters clicked appear on the page
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).text();
    letterMatched();
    incorrectLetter();
});
//makes letters clicked change colors
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).css('background-color', 'green');
    letterMatched();
});
// $('.letters').on('click', function(event) {
//     if (letterClicked !== randomWords;
//     numberOfLives -= 1;
// }
// $('#number-of-lives').html('number of lives: ' + numberOfLives);
    
});