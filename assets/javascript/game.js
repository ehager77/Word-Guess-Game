var wrongWord = [];
var underscore = [];
var words = ["Awkward", "Jinx", "Quip"];
var guesses = 10;
var wins = "";
var chosenWord = "";


function start() {

    reset();

    console.log(wrongWord);
    console.log(underscore);





    // document.addEventListener('keypress', function(event)
    // using arrow functiom
    document.addEventListener('keypress', (event) => {
        var letter = String.fromCharCode(event.keyCode);
        // if guess is correct
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                underscore[i] = letter;
                // rightWord.push(letter);
                console.log(underscore);
                var underscores
            }

        }


        if (chosenWord.toLowerCase().indexOf(letter) > -1) {
            // add to right words array
            // replace underscore with keypress
            underscore[chosenWord.toLowerCase().indexOf(letter)] = letter;
            var underScoreDOM = document.getElementById("underscores");
            console.log(underScoreDOM);
            underScoreDOM.textContent = underscore.join(" ");
        }

        // if guess is wrong
        else {

            guesses--;
            document.getElementById("remaining-guesses").textContent = guesses;


            //wrongWord.push(letter);
            console.log(guesses)

        }

        console.log(wrongWord);
        console.log(letter);
        console.log(wrongWord.indexOf(letter));

        if (underscore.indexOf(letter) === -1 && wrongWord.indexOf(letter) === -1) {
            wrongWord.push(letter);
            var wrongGuess = document.getElementById("wrongGuess");
            wrongGuess.textContent = wrongWord.join(', ');

        }


        else if (wrongWord.indexOf(letter) > -1) {
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
        document.getElementById("next").onclick = function () {
            reset();
            console.log(wins);
        }


        if (underscore.join('') == chosenWord) {
            // win = true;
            wins++;
            document.getElementById("wins-count").textContent = wins;
            console.log(wins);
            var message = document.getElementById("next");
            message.textContent = "You Win! Click to Play Again.";
        }

        else {
            if (guesses === 0) {
                var message = document.getElementById("next");
                message.textContent = "You Lose. Click to Play Again";



            }


        }

    }

    );

}

function reset(){

    wrongWord = [];
    underscore = [];
    guesses = 10;
    var underScoreDOM = document.getElementById("underscores");
    underScoreDOM.textContent = underscore.join("");
    var wrongGuess = document.getElementById("wrongGuess");
    wrongGuess.textContent = wrongWord.join(', ');
    document.getElementById("remaining-guesses").textContent = guesses;
    var randWord = Math.floor(Math.random() * words.length);
    chosenWord = words[randWord].toLowerCase();
    for (var i = 0; i < chosenWord.length; i++) {
        underscore.push("_ ");
        console.log(underscore);
    }

    document.getElementById("underscores").innerHTML = underscore.join(" ");
    console.log(underscore)

    document.getElementById("remaining-guesses").textContent = guesses;
    document.getElementById("next").innerHTML="Play Game";


}

