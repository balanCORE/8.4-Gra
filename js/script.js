//  output
var playerPoints = document.getElementById('myPoints');
var computerPoints = document.getElementById('compPoints');

// buttons
var rockBtn = document.getElementById('btnRock');
var scisorsBtn = document.getElementById('btnScisors');
var paperBtn = document.getElementById('btnPaper');

//
var player = {points: 0, choice: ''};
var computer = {points: 0, choice: ''};

var choices = ['rock', 'scisors', 'paper'];

//
function playerChoice(choice) {
	player.choice = choice;
	computer.choice = computerChoice();
	whoWinRound();
	showResult();
	countTen();
}

function computerChoice(){
	return choices = Math.floor(Math.random()*3)
}

function whoWinRound(){
	if (player.choice == computer.choice) {player.points++ + computer.points++}
		else if (player.choice == choices[0] && computer.choice == choices[1] || player.choice == choices[1] && computer.choice == choices[2] || player.choice == choices[2] && computer.choice == choices[3]) {player.points++}
			else {computer.points++}
}

function showResult(){
	playerPoints.innerHTML = player.points;
	computerPoints.innerHTML = computer.points;
}

function countTen() {
	if (player.points == 10) {
		playerPoints.innerHTML = "YOU";
		computerPoints.innerHTML = "WON!!";
	} else if (computer.points == 10) {
		playerPoints.innerHTML = "YOU";
		computerPoints.innerHTML = "LOST";
	}
}

rockBtn.addEventListener('click', function(){
	playerChoice('rock')
})
scisorsBtn.addEventListener('click', function(){
	playerChoice('scisors')
})
paperBtn.addEventListener('click', function(){
	playerChoice('paper')
})



















