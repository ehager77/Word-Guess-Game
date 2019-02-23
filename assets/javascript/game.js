// Pick a random word

var words =[
    "javascript",
    "monkey",
    "amazing",
    "pancake",
];

var word = words[Math.floor(Math.random() * words.length)]

var answerArray = [];
for (var i=0; i <word.length; i++){
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// While the word has not been guessed {
    while{

    }
    // Show the player their current progres
    //  Get a guess from the player
    // If the player wants to quit the game {
        // Quit the game
    // }
 Else If the guess is not a single letter {
 Tell the player to pick a single letter
 }
 Else {
 If the guess is in the word {
 Update the player's progress with the guess
 }
 }
}