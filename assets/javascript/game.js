// Pick a random word
var words = ["Awkward", "Jinx", "Quip"];
var wordsIndex = Math.floor(Math.random() * words.length);
var chosenWord=words[wordsIndex].toLowerCase();
//var rightWord =[];
var wrongWord = [];
var underscore = [];
var correctGuesses = 0;
var guesses=12;
console.log(guesses);
console.log(chosenWord);
var wins=0;

var guesses = document.getElementById("remaining-guesses").innerHTML;

function main(){


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
    for(var i = 0; i <chosenWord.length; i++){
        if(chosenWord[i] === letter){
            underscore[i] = letter;
            // rightWord.push(letter);
            console.log(underscore);
        }
        // If guess is wrong
        // else {
        //     var wrongGuess = document.getElementById("wrongGuess");
        //     console.log(wrongGuess);
        //     wrongGuess.textContent = wrongWord.join(', ');
        //     guesses--;
        //     console.log(guesses);
            
        // }

    }
    


    if(chosenWord.toLowerCase().indexOf(letter) > -1){
        // add to right words array
        // replace underscore with keypress
        underscore[chosenWord.toLowerCase().indexOf(letter)] = letter;
        var underScoreDOM = document.getElementById("rightGuess");
        underScoreDOM.textContent = underscore.join(' ');
    }
    // if guess is wrong
    else{
        guesses--;
        //wrongWord.push(letter);
        console.log(guesses)
        console.log(wrongWord);
        if(wrongWord.indexOf(letter) === -1){
            wrongWord.push(letter);
            var wrongGuess = document.getElementById("wrongGuess");
            wrongGuess.textContent = wrongWord.join(', ');

        }else{
            alert("You suck.");
        }
        // for(var i=0; i< underscore.length; i++){
        //     if(wrongWord[i] === letter){
        //         //console.log(wrongWord[i]);
        //         alert("You suck.")
        //     }
        //     else if(wrongWord.indexOf(letter)===-1){
        //         wrongWord.push(letter);
        //         console.log(wrongWord);
        //         var wrongGuess = document.getElementById("wrongGuess");
        //         wrongGuess.textContent = wrongWord.join(', ');
        //     }
            
        // }
        
    }

    if(underscore.join('') == chosenWord){
        var message = document.getElementById("next");
        message.textContent = "You Win! Press Refresh to Play Again.";
        var winsCount = document.getElementById("wins-count").innerHTML=wins+1;
    }  

    }

 );

}
