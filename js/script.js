//  output
var playerPoints = document.getElementById('myPoints');
var computerPoints = document.getElementById('compPoints');

// buttons
var rockBtn = document.getElementById('btnRock');
var scisorsBtn = document.getElementById('btnScisors');
var paperBtn = document.getElementById('btnPaper');

//
var player = {score: 0, choice: ''};
var computer = {score: 0, choice: ''};



//
function playerChoice(choice) {
	player.choice = choice;
	computer.choice = computerChoice();
	whoWinRound();
	showResult();
	countTen();
}

function computerChoice(){
	var choices = ['rock', 'scisors', 'paper'];
	return choices = Math.floor(Math.random()*3)
}

function whoWinRound(){
	if (player.choice == computer.choice) player.score++ + computer.score++;
	else if (player.choice == 'rock' && computer.choice == 'scisors' || player.choice == 'scisors' && computer.choice == 'paper' || player.choice == 'paper' && computer.choice == 'rock') player.score++;
	else computer.score++
}

function showResult(){
	playerPoints.innerHTML = player.score;
	computerPoints.innerHTML = computer.score;
}

function countTen() {
	if (player.score == 10) {
		playerPoints.innerHTML = "YOU";
		computerPoints.innerHTML = "WON!!";
	} else if (computer.score == 10) {
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



















