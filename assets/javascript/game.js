// Pick a random word
var words = ["Crypt", "Dwarves", "Gazebo", "Ivory", "Jukebox", "Pixel", "Zombie", "Sphinx", "Jinx", "Quip"];
var wordsIndex = Math.floor(Math.random() * words.length);
var chosenWord=words[wordsIndex].toLowerCase();
var rightWord =[];
var wrongWord = [];
var underscore = [];
var guesses=12;
console.log(chosenWord);

// DOM manipulation


// Main

var guesses = document.getElementById("remainng-guesses");



// for loop to gen underscore and push to the underscore array
var generateUnderscore = function() {
    for(var i = 0; i < chosenWord.length;i++){
        underscore.push("_");
    }
    return underscore;
}

console.log(generateUnderscore());

// document.addEventListener('keypress', function(event)
// using arrow functiom
document.addEventListener('keypress', (event) => {
    var letter = String.fromCharCode(event.keyCode);
    // if guess is correct
    if(chosenWord.toLowerCase().indexOf(letter) > -1){
        // add to right words array
        rightWord.push(letter);
        // replace underscore with keypress
        underscore[chosenWord.toLowerCase().indexOf(letter)] = letter;
        var underScoreDOM = document.getElementById("rightGuess");
        underScoreDOM.textContent = underscore.join(' ');
        console.log(underscore);
    }
    // if guess is wrong
    else{
        wrongWord.push(letter);
        var wrongGuess = document.getElementById("wrongGuess");
        wrongGuess.textContent = wrongWord.join(', ');
    }

    if(underscore.join('') == chosenWord){
        var message = document.getElementById("next");
        message.textContent = "You Win!  Play Again?";
        var wins=0;
        var winsCount = document.getElementById("wins-count").innerHTML=wins+1;
    }

});

