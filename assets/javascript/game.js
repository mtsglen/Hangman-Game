var letters = ["a","b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ["apple", 'banana', 'orange']

var guesses = 10;
var wins = 0;
var losses = 0;
var letter = "";
var guessedLetter = [];
var guessed = guessedLetter.join(" ");
var rand = words[Math.floor(Math.random() * words.length)];
var answer = [];
var win = "You are a Winner!";
var loss = "You Lose!";
var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guessed Letters: " + guessed + "</p>" +
    "<p>Guesses Remaining: " + guesses + "</p>";

  // document.getElementById("game").innerHTML = answer.join(" ");
  document.getElementById('info').innerHTML = html

// function hangman(){
  for (var i=0; i < rand.length; i++) {
    answer[i] = '_';
  };

  document.getElementById("game").innerHTML = answer.join(" ");
  // document.getElementById('info').innerHTML = html
function game () {
  document.onkeyup = function () {
    letter = event.key;
    if (letters.indexOf(letter, 0) != -1){
        // guesses = guesses - 1
        guessedLetter.push(letter);
        console.log(guessedLetter);
        console.log(guessed);
        if (rand.indexOf(letter, 0) == -1){
            guesses = guesses - 1
          }
        for (var j = 0; j < rand.length; j++){
          if (letter == rand[j]){
            answer.splice(j, 1, letter);
            console.log(answer);
          } 
          html =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guessed Letters: " + guessedLetter.join(" ") + "</p>" +
                "<p>Guesses Remaining: " + guesses + "</p>";
          document.getElementById("game").innerHTML = answer.join(" "); 
          //determine if win or lose and increment by 1 
          if (answer.indexOf("_", 0) == -1){
            document.getElementById("game").innerHTML = ((answer.join(" ")) + "<p>" + win + "</p>");
            wins = wins + 1;
            resetGame();
        } else if (guesses == 0) { 
            losses = losses + 1;
            resetGame();
        };
        letters.splice((letters.indexOf(letter)), 1, "");

    document.getElementById('info').innerHTML = html;
        };
    };   
    // document.getElementById("game").innerHTML = answer.join(" ");
  }
};
game();
  function resetGame () {
      document.onkeyup = function (){
      rand = words[Math.floor(Math.random() * words.length)];
      letters = ["a","b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      guessedLetter = [];
      for (var i=0; i < rand.length; i++) {
        answer[i] = '_';
      document.getElementById("game").innerHTML = answer.join(" ");
      game();
}}};  