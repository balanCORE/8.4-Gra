//  output
var playerPoints = document.getElementById('myPoints');
var computerPoints = document.getElementById('compPoints');
var howManyRounds = document.getElementById('roundOutput');
var resultsModal = document.getElementById('resultsModal');
var closeResultsModal = document.getElementById('closeModal');
var tableScoreBtn = document.getElementById('resetTable')

// buttons
var rockBtn = document.getElementById('btnRock');
var scisorsBtn = document.getElementById('btnScisors');
var paperBtn = document.getElementById('btnPaper');

var menuBtn = document.getElementById('menu');

//
let player = {score: 0, choice: ''};
let computer = {score: 0, choice: ''};
var countTo = 10;
var roundResults = [];

howManyRounds.innerHTML = countTo;
//


function playerChoice(choice) {
	player.choice = choice;
	computer.choice = computerChoice();
	whoWinRound();
	showResult();
  	addRoundResult();
	countTen();
}

function addRoundResult() {
  roundResults.push({ playerChoice: player.choice, computerChoice: computer.choice, score: player.score+":"+computer.score })  
}

function computerChoice(){
	const choices = ['rock', 'scisors', 'paper'];
	return choices[Math.floor(Math.random()*3)]
}

function whoWinRound() {
	if (player.choice === computer.choice) player.score++ + computer.score++;
	else if (player.choice === 'rock' && computer.choice === 'scisors' || player.choice === 'scisors' && computer.choice == 'paper' || player.choice == 'paper' && computer.choice == 'rock') player.score++;
	else computer.score++
}

function showResult(){
	playerPoints.innerHTML = player.score;
	computerPoints.innerHTML = computer.score;
}

function countTen() {
	if (player.score == countTo) {
		playerPoints.innerHTML = "YOU";
		computerPoints.innerHTML = "WON!!";
    generateTable();
		refresh();
	} else if (computer.score == countTo) {
		playerPoints.innerHTML = "YOU";
		computerPoints.innerHTML = "LOST";
    generateTable();
		refresh();
	}
}


function generateTable() {
  var tbody = '';
  for(var i=0; i<roundResults.length; i++) {
    tbody += '<tr><td>'+(i+1)+'</td><td>'+roundResults[i].playerChoice+'</td><td>'+roundResults[i].computerChoice+'</td><td>'+roundResults[i].score+'</td></tr>'
  }
  
  resultsModal.querySelector('tbody').innerHTML = tbody;
  resultsModal.style.display = "flex";
}

function refresh(){
	player.score = 0;
	computer.score = 0;
}

menuBtn.addEventListener('click', function(){
	countTo = prompt('Do ilu gramy?')
	refresh();
	howManyRounds.innerHTML = countTo;
	playerPoints.innerHTML = "New";
	computerPoints.innerHTML = "Game";
})

rockBtn.addEventListener('click', function(){
	playerChoice('rock')
})
scisorsBtn.addEventListener('click', function(){
	playerChoice('scisors')
})
paperBtn.addEventListener('click', function(){
	playerChoice('paper')
})

closeResultsModal.addEventListener("click", function() {
  resultsModal.style.display = "none";
})

tableScoreBtn.addEventListener("click", function() {
	resultsModal.querySelector('tbody').innerHTML = '<tr><td>'+0+'</td><td>'+0+'</td><td>'+0+'</td><td>'+0+'</td></tr>'
})









