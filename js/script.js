//wyniki
var addPointPlayer = document.getElementById('myPoints');
var addPointComputer = document.getElementById('compPoints');
//buttony
var rockChoice = document.getElementById('btnRock');
var scisorsChoice = document.getElementById('btnScisors');
var paperChoice = document.getElementById('btnPaper');

// zapisanie wyników
var playerSum = {sum: 0, choice: ' '};
var computerSum = {sum: 0, choice: ' '};

// klikacze
rockChoice.addEventListener('click', function() {
	playerChoice('rock')
});

scisorsChoice.addEventListener('click', function() {
	playerChoice('scisors')
});

paperChoice.addEventListener('click', function() {
	playerChoice('paper')
});

function playerChoice(choice){
	playerSum.choice = choice;
	computerSum.choice = randomChoice();
	compare();
	showResults();
	checkResults();
}

function randomChoice() {
	var computerChoice = ['rock','scisors','paper'];
	return computerChoice[Math.floor(Math.random() * 3)]
};

function compare(){
	if(playerSum.choice === computerSum.choice) { playerSum.sum++ + computerSum.sum++; }
	else if((playerSum.choice === 'rock' && computerSum.choice === 'scissors') || (playerSum.choice === 'paper' && computerSum.choice === 'rock') || (playerSum.choice === 'scissors' && computerSum.choice === 'paper')) {
	playerSum.score++;}
	else { computerSum.score++; }
};

function showResults() {
	addPointPlayer.innerHTML = playerSum.sum;
	addPointComputer.innerHTML = computerSum.sum;
};

function checkResults() {
	if (playerSum.sum == 10) {
		addPointPlayer.innerHTML = "YOU";
		addPointComputer.innerHTML = "WON!"
	} else if (computerSum.sum == 10) {
		addPointPlayer.innerHTML = "YOU";
		addPointComputer.innerHTML = "LOST!!"
	}
}

