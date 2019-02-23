// Pick a random word
var words = ["Awkward", "Bagpipes", "Crypt", "Dwarves", "Fishhook", "Gazebo", "Ivory", "Jukebox", "Kayak", "Pixel", "Zombie", "Sphinx", "Jinx", "Quip", "Mystify"];
var wordsIndex = Math.floor(Math.random() * words.length);
var chosenWord=words[wordsIndex];
var rightWord =[];
var wrongWord = [];
var underscore = [];
console.log(chosenWord); 

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
        rightWord.push(letter);
        console.log(rightWord);
    }

    else{
        wrongWord.push(letter);
        console.log(wrongWord);
    }



});

