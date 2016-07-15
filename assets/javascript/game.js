//  variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//  choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Computer Guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// input from keyboard
document.onkeyup = function(event) {

	//  User Input
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);


	// Conditions
	if (userGuess == computerGuess) { 
		wins++;
		alert("You won! Play again!");
		reset();

	} else if (guessesLeft == 1) {
		losses++;
		alert("You lost! Try again!");
		reset();
	} else {
		guessesSoFar.push(userGuess);
		guessesLeft--;
	}

		// displaying to HTML
		var html = "<p>Wins: " +wins +
			"</p>" +
			"<p>Losses: " +
			losses +
			"</p>" +
			"<p>Guesses Remaining: " +
			guessesLeft + "</p>" + "<p> Letters Guessed: " + guessesSoFar + " " + "</p>";

		// html add
		document.querySelector('#game').innerHTML = html;

// reset function
function reset() {
	guessesSoFar.length = 0;
	guessesLeft = 9;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
}

}