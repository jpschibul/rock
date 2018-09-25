var result1 = document.querySelector('#result1');
var result2 = document.querySelector('#result2');
var message = document.querySelector('#message');
var playerWins = 0;
var computerWins = 0;

var img1 = document.querySelector('#img1');
img1.addEventListener('click', playRock);

var img2 = document.querySelector('#img2');
img2.addEventListener('click', playPaper);

var img3 = document.querySelector('#img3');
img3.addEventListener('click', playScissors);



function computerPlay() {
  var myArray = ['ROCK', 'PAPER', 'SCISSORS'];
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    message.textContent = "You Won! The computer chose Scissors";
    playerWins++;
    result1.textContent = playerWins;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    message.textContent = "You Won! The Computer chose Rock";
    playerWins++;
    result1.textContent = playerWins;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    message.textContent = "You Won! The computer chose Paper";
    playerWins++;
    result1.textContent = playerWins;
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    message.textContent = "You Lost! The computer chose Paper";
    computerWins++;
    result2.textContent = computerWins;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    message.textContent = "You Lost! The computer chose Scissors";
    computerWins++;
    result2.textContent = computerWins;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    message.textContent = "You Lost! The computer chose Rock";
    computerWins++;
    result2.textContent = computerWins;
  } else if (playerSelection === computerSelection) {
    message.textContent = "Draw!";
  }

  if (playerWins == 5) {
    img1.removeEventListener('click', playRock);
    img2.removeEventListener('click', playPaper);
    img3.removeEventListener('click', playScissors);
    playerWon();
  } else if (computerWins == 5) {
    img1.removeEventListener('click', playRock);
    img2.removeEventListener('click', playPaper);
    img3.removeEventListener('click', playScissors);
    computerWon();
  }
}

function playRock() {
  var computerSelection = computerPlay();
  playRound('ROCK', computerSelection);
}

function playPaper() {
  var computerSelection = computerPlay();
  playRound('PAPER', computerSelection);
}

function playScissors() {
  var computerSelection = computerPlay();
  playRound('SCISSORS', computerSelection);
}


function playerWon() {
  var over = document.querySelector('#over');
  var btn = document.createElement("BUTTON");
  btn.classList.add('btn');
  btn.textContent = 'You Won!\r\n';
  btn.textContent += 'Click for a new game';
  over.appendChild(btn);
  btn.addEventListener('click', () => {
    message.textContent = 'Make your move!';
    img1.addEventListener('click', playRock);
    img2.addEventListener('click', playPaper);
    img3.addEventListener('click', playScissors);
    playerWins = 0;
    computerWins = 0;
    result1.textContent = playerWins;
    result2.textContent = computerWins;
    btn.remove();
  });
}

function computerWon() {
  var over = document.querySelector('#over');
  var btn = document.createElement("BUTTON");
  btn.classList.add('btn');
  btn.textContent = 'You lost!\r\n';
  btn.textContent += 'Click to try again';
  over.appendChild(btn);
  btn.addEventListener('click', () => {
    message.textContent = 'Make your move!';
    img1.addEventListener('click', playRock);
    img2.addEventListener('click', playPaper);
    img3.addEventListener('click', playScissors);
    playerWins = 0;
    computerWins = 0;
    result1.textContent = playerWins;
    result2.textContent = computerWins;
    btn.remove();
  });
}