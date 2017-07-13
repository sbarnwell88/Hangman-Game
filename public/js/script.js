$(function(){

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < alphabet.length; i++) {
    $('#buttons-for-letters').append('<div class="btn btn-info letters">'+ alphabet[i]+'</div>');
};

var wordBank = ['david', 'jace', 'richard'];
var randomNumber = Math.floor(wordBank.length * Math.random());
var randomWholeWords = wordBank[randomNumber];
var randomWords = randomWholeWords.split('');
var emptySpacesForDashes = [];
var reset = $('#reset').append('<div class="btn btn-info">' + "Play Again" + '</div');
var letterClicked;
var numberOfLives = 6;

for (var i = 0; i < randomWords.length; i++) {
    emptySpacesForDashes.push('_ ');
}
$('#underscore').append(emptySpacesForDashes);

//push underscore that matches length of word
function letterMatched() {
    for (var i = 0; i < randomWords.length; i++) {
        if (letterClicked === randomWords[i]) {
        emptySpacesForDashes[i] = letterClicked;
        }
    $('#underscore').text(emptySpacesForDashes.join(' '));
    } 
};

function updateLives(){
    $('#number-of-lives').html('number of lives: ' + numberOfLives);
}
//if incorrect letter clicked, number of lives goes down
function incorrectLetter() {
    if (randomWholeWords.indexOf(letterClicked) === (-1)) {
            numberOfLives -=1;
            updateLives();
     }   
        $(event.currentTarget).off('click');
    };

function winOrLose() {
    if (emptySpacesForDashes.indexOf('_ ') === -1) {
        $('#number-of-lives').html('You win!');
        $('.letters').off('click');
    }
    if (numberOfLives === 0) {
        $('#number-of-lives').html('Game Over!');
        $('.letters').off('click');
    }   
}
function resetButton() {
    $('.letters').removeAttr('style');
    emptySpacesForDashes = [];
    numberOfLives = 6;
    updateLives();

}

//WHEN I'm finished playing a game
//THEN I can click on "play again"

//WHEN I click on the instruction buttons
//THEN a widow pops up where I can read the instructions of the game

//makes letters clicked appear on the page
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).text();
    letterMatched();
    incorrectLetter();
    updateLives();
    winOrLose();
});
//makes letters clicked change colors
$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).css('background-color', 'green');
    letterMatched();
});
$('#reset').on('click', function (event) {
    resetButton();    
    //restore number of tries
    
    //place new empty underscores
})

    
});