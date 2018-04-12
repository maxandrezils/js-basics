/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

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
  if(scores[activePlayer] >= 100) alert(`Player ${activePlayer + 1} has won`);
}
function reset(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.q
}

function hold(){
  addRoundToTotalScore();
  activePlayerstyling()
  changeActivePlayer()
  winCondition();
}
