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
$('.hangman-whole-body').css('visibility', 'hidden');


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
}

//if incorrect letter clicked, number of lives goes down
function incorrectLetter() {
    if (randomWholeWords.indexOf(letterClicked) === (-1)) {
            numberOfLives -=1;
     }  
        $('#number-of-lives').html('number of lives: ' + numberOfLives);
        $(event.currentTarget).off('click');
    };

function winOrLose() {
    if (numberOfLives === 5) {
        $('#hangman-head').css('visibility', 'visible');
    }
    if (numberOfLives === 4) {
        $('#hangman-body').css('visibility', 'visible');
    }
    if (numberOfLives === 3) {
        $('#left-arm').css('visibility', 'visible');
    }
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
    location.reload();
}


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
$('#reset').on('click', function (event) {
    resetButton();    
})

    
});