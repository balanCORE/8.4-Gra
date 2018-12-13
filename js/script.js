//wyniki
var addPointPlayer = document.getElementById('myPoints');
var addPointComputer = document.getElementById('compPoints');
//buttony
var rockChoice = document.getElementById('btnRock');
var scisorsChoice = document.getElementById('btnScisors');
var paperChoice = document.getElementById('btnPaper');

function myPoint(point) {
	playerSumPoints.sum++;
	return addPointPlayer.innerHTML ++;
};

function computerPoint(point) {
	computerSumPoints.sum ++;
	return addPointComputer.innerHTML ++;
};

rockChoice.addEventListener('click', function(){
	if (randomChoice() == 'rock') return myPoint() + computerPoint();
	else if (randomChoice() == 'scissors') return myPoint();
	else return computerPoint()
	checkResults();
});

scisorsChoice.addEventListener('click', function(){
	if (randomChoice() == 'rock') return computerPoint();
	else if (randomChoice() == 'scissors') return myPoint() + computerPoint();
	else return myPoint();
	checkResults();
});

paperChoice.addEventListener('click', function(){
	if (randomChoice() == 'rock') return myPoint();
	else if (randomChoice() == 'scissors') return computerPoint();
	else return computerPoint() + myPoint();
	checkResults();
});

function randomChoice(){
	var computerChoice = ['rock','scissors','paper'];
	return computerChoice[Math.floor(Math.random() * 3)];

};

// zapisanie wyników
var playerSumPoints = {sum: 0};
var computerSumPoints = {sum: 0};


function checkResults() {
	if (playerSumPoints.sum == 10) {
		addPointPlayer = "YOU";
		addPointComputer = "WON!"
	} else if (computerSumPoints.sum == 10) {
		addPointPlayer = "YOU";
		addPointComputer = "LOST!!!!!!"
	}
}
