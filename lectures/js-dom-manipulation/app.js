/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

  Challenges:
  1. Add a second die.
*/
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

const rollDice = document.querySelector('.btn-roll').
  addEventListener('click', () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice-1').src = `dice-${die1}.png`;
    document.querySelector('.dice-2').src = `dice-${die2}.png`;
    updateCurrentScore(dice);
  }
);

const updateCurrentScore = (diceScore) => {
  if(diceScore != 1){
    roundScore += diceScore;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else{
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    changeActivePlayer();
    activePlayerstyling();
  }
};

const changeActivePlayer = () => {
  if(activePlayer == 0){
    activePlayer = 1;
  }else{
    activePlayer = 0;
  }
};

const activePlayerstyling = () => {
  let sectionStyling0 = document.querySelector('.player-0-panel').classList;
  let sectionStyling1 = document.querySelector('.player-1-panel').classList;
  sectionStyling0.toggle('active');
  sectionStyling1.toggle('active');
};

const addRoundToTotalScore = () => {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
};

const winCondition = () => {
  if(scores[activePlayer] >= 100) alert(`Player ${activePlayer + 1} has won`);
};

const reset = () => {
  if(confirm('Are you sure you want to start a new game?')){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
  }
};

const hold = () => {
  addRoundToTotalScore();
  activePlayerstyling()
  changeActivePlayer()
  winCondition();
};
