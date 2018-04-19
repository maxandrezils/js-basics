/*
GAME RULES:
  1. The game has 2 players, playing in rounds
  2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
  2.1. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
  3. The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
  4. The first player to reach 100 points on GLOBAL score wins the game
  5. Add a flag to check if the win condition has been met.

  Challenges:
  1. A player loses his/her entire score when rolling two sixes in a row.
  2. Add an input field to the HTML where players can set the winning score so that they can change the predifined score of 100
  3. Add another dice to the game so that there are two dice. The player loses their current score if one of the die is 1.

  TODO: Show second die
  TODO: add second die to the scores
*/
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let gameWon = false;

function rollDice(){
  let dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').src = 'dice-' + dice + '.png';
  updateCurrentScore(dice);
}

function updateCurrentScore(diceScore){
  if(diceScore != 1){
    roundScore += diceScore;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else{
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    changeActivePlayer();
    activePlayerstyling();
  }
}

function changeActivePlayer(){
  if(activePlayer == 0){
    activePlayer = 1;
  }else{
    activePlayer = 0;
  }
}

function activePlayerstyling(){
  let sectionStyling0 = document.querySelector('.player-0-panel').classList;
  let sectionStyling1 = document.querySelector('.player-1-panel').classList;
  sectionStyling0.toggle('active');
  sectionStyling1.toggle('active');
}


function addRoundToTotalScore(){
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}


function winCondition(){
  if(scores[activePlayer] >= 10) alert(`Player ${activePlayer + 1} has won`);
}

function newGame(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
}


function hold(){
  addRoundToTotalScore();
  activePlayerstyling()
  changeActivePlayer()
  winCondition();
}


function reset(){
  if(confirm('Are you sure you want to start a new game?')){
    newGame();
  }
}
