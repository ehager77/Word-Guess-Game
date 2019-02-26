function start(){



// Pick a random word
var words = ["Awkward", "Jinx", "Quip"];
//var rightWord =[];
var underscore = [];
var wins=0;




    var randWord = Math.floor(Math.random() * words.length);
    var chosenWord=words[randWord].toLowerCase();
    console.log(chosenWord);


    // for loop to gen underscore and push to the underscore array
        for(var i = 0; i < chosenWord.length;i++){
            underscore.push("_ ");
            console.log(underscore);

        }

        document.getElementById("underscores").innerHTML = underscore.join(" ");
        console.log(underscore)
        


    var wrongWord = [];
    var guesses=10;

    document.getElementById("remaining-guesses").textContent = guesses;


       
        
        
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
                var underscores
            }

        }


        if(chosenWord.toLowerCase().indexOf(letter) > -1){
            // add to right words array
            // replace underscore with keypress
            underscore[chosenWord.toLowerCase().indexOf(letter)] = letter;
            var underScoreDOM = document.getElementById("underscores");
            console.log(underScoreDOM);
            underScoreDOM.textContent = underscore.join(" ");
        }
        
        // if guess is wrong
        else{

            guesses--;
            document.getElementById("remaining-guesses").textContent = guesses;


            //wrongWord.push(letter);
            console.log(guesses)

        console.log(wrongWord);
        if(wrongWord.indexOf(letter) === -1){
            wrongWord.push(letter);
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
        var win = false;
        if(underscore.join('') == chosenWord){
            var message = document.getElementById("next");
            message.textContent = "You Win! Press Refresh to Play Again.";
            var winsCount = document.getElementById("wins-count").innerHTML=wins+1;
            win = true;
        }

        else{
            if(guesses == 0){
                var message = document.getElementById("next");
                message.textContent = "You Suck.";

            }
        }

        document.getElementById("next").onclick = function(){

            if (win) {
                // incremenmt win
                document.getElementById("wins-count").innerHTML=++wins;
                win = false;
                start();
            }

            
            
        }
        

        }

    );
 
    }

