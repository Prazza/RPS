console.log("rps.js loaded");

// What the computer choice is
function computerChoice() {
	// RPS has 3 options, rock, paper, scissors
	// each one should get a 33% chance of being picked
	var number = Math.random();
	console.log(number);
	
	var choice;
	// console.time('return');
	if (number >= 0 && number <= 0.33) {
		console.log(number, 'between 0 & 33');
		choice = 'rock';
	} else if (number >= 0.66 && number <= 0.33) {
		consoel.log(number, "between .33 and .66");
		choice = 'paper';
	} else {
		console.log(number, 'between .67 to 1')
		choice = 'scissor';
	}
	return choice;

	// output computer's choice
}

console.time('return'); // check the time taken to run the fucntion
console.log(computerChoice());
console.timeEnd('return'); // sets the end point to call the ran time
// What the user's choice is

$('.rps-action').on('click', function() {
	// console log USER & Compyter
	console.log('.rps-action');
	var CompChoice =  computerChoice();
	var message = compare(this.id, computerChoice());
	$('#message').html(message);
});


// Comparing the computer to the user

var compare = function(computer, user) {
	// tie
	if (computer === user) {
		return 'It\'s a tie!';
	}
	// scissors beats paper
	if (computer === 'scissor') {
		if (user === 'paper') {
			if (user === 'rock') {
				return 'rock wins';
			} else if (user === 'paper'){
				return 'scissor wins';
			}
		}

	}

	// paper beats rokc
	if (computer === 'rock') {
		if (user === 'scissor') {
			if (user === 'rock') {
				return 'rock wins';
			} else if (user === 'paper'){
				return 'scissor wins';
			}
		}

	}

	// rock beats scissors
if (computer === 'paper') {
		if (user === 'scissor') {
			if (user === 'rock') {
				return 'scissor wins';
			} else if (user === 'rock'){
				return 'paper wins';
			}
		}

	}

}	

// 

// // D.R.Y, don't repeat yourself!! look at patterns and look for a way to clean that up and 
// // make more efficent. 
// //More lines of code, but it's easier to read and follow the logic pattern
// // Rock Win Options
// if (computer === 'scissors' && user === 'rock') {
// 	return 'rock wins';
// }
// //Paper Win Options

// // Scissor Win Options

// // Tie
// if (computer === user) {
// 	return 'it\'s a tie!'
// }





// Outputing the result 