$(function(){

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < alphabet.length; i++) {
    $('#buttons-for-letters').append('<div class="btn btn-info letters">'+ alphabet[i]+'</div>');
};

var wordBank = ['consider', 'minute', 'accord', 'evident', 'practice', 'intend', 'concern', 'commit', 'issue', 'approach', 'establish', 'utter', 'conduct', 'engage', 'obtain', 'scarce', 'policy', 'straight', 'stock', 'apparent', 'property', 'fancy', 'concept', 'court', 'appoint', 'passage', 'vain', 'instance', 'coast', 'project'];
var randomNumber = Math.floor(wordBank.length * Math.random());
var randomWholeWords = wordBank[randomNumber];
var randomWords = randomWholeWords.split('');
var emptySpacesForDashes = [];
var reset = $('#reset').append('<div class="btn btn-info reset">' + "Play Again" + '</div');
var letterClicked;
var numberOfLives = 6;
$('.hangman-whole-body').css('visibility', 'hidden');
$('#hint').append('<div class="btn btn-info hint">' + "Hint" + '</div>');


for (var i = 0; i < randomWords.length; i++) {
    emptySpacesForDashes.push('_ ');
}
$('#underscore').append(emptySpacesForDashes);

function vowelCount(randomWholeWords) { 
  return randomWholeWords.replace(/[^aeiou]/g, "").length; 
}

function letterMatched() {
    for (var i = 0; i < randomWords.length; i++) {
        if (letterClicked === randomWords[i]) {
        emptySpacesForDashes[i] = letterClicked;
        }
    $('#underscore').text(emptySpacesForDashes.join(' '));
    } 
}

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
    if (numberOfLives === 2) {
        $('#right-arm').css('visibility', 'visible');
    }
    if (numberOfLives === 1) {
        $('#right-leg').css('visibility', 'visible');
    }
    if (emptySpacesForDashes.indexOf('_ ') === -1) {
        $('#number-of-lives').html('You win!');
        $('.letters').off('click');
    }
    if (numberOfLives === 0) {
        $('#number-of-lives').html('Game Over!');
        $('#left-leg').css('visibility', 'visible');
        $('.letters').off('click');
        $('#right-word').html('Correct Word: ' + randomWholeWords);
    }   
}
function resetButton() {
    location.reload();
}

$('.letters').on('click', function(event) {
    letterClicked = $(event.currentTarget).text();
    letterClicked = $(event.currentTarget).css('background-color', 'green');
    letterMatched();
    incorrectLetter();
    winOrLose();
});
$('#reset').on('click', function (event) {
    resetButton();    
})
$('.hint').on('click', function (event) {
    $(event.target).html('There are vowels in ' + vowelCount(randomWholeWords) + ' spots!');
    vowelCount(randomWholeWords);
})
    
});