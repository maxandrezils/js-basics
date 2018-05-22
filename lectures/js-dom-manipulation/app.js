/*
--------------------------------------------------------------------------------
GAME RULES:
--------------------------------------------------------------------------------
  - The game has 2 players, playing in rounds
  - In each turn, a player rolls a dice as many times as he whishes.
    Each result get added to his ROUND score
  - BUT, if the player rolls a 1, all his ROUND score gets lost. After that,
    it's the next player's turn
  - The player can choose to 'Hold', which means that his ROUND score gets
  added to his GLOBAL score. After that, it's the next player's turn
  - The first player to reach 100 points on GLOBAL score wins the game
--------------------------------------------------------------------------------
CHALLENGES:
--------------------------------------------------------------------------------
  Change the game to follow these rules:
  1. A player looses his ENTIRE score when he rolls two 6 in a row. After that,
     it's the next player's turn. (Hint: Always save the previous dice roll in
     a separate variable)
  2. Add an input field to the HTML where players can set the winning score, so
     that they can change the predefined score of 100.
     (Hint: you can read that value with the .value property in JavaScript.
     This is a good oportunity to use google to figure this out :)
  3. Add another dice to the game, so that there are two dices now. The player
     looses his current score when one of them is a 1.
     (Hint: you will need CSS to position the second dice, so take a look at
     the CSS code for the first one.)
--------------------------------------------------------------------------------
DECLARATIONS:
--------------------------------------------------------------------------------
  1. scores       -- score for both activePlayerStyling
  2. roundScore   -- the current score being updated by each rolls
  3. activePlayer -- current player rolling the dice
  4. winScore     -- the win winCondition
--------------------------------------------------------------------------------
FUNCTIONS:
--------------------------------------------------------------------------------
  1. changeActivePlayer()  -- changes the current active player
  2. activePlayerStyling() -- toggles the styling for the active player
  3.
--------------------------------------------------------------------------------
*/
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let winScore = 100;

const changeActivePlayer = () => {
  activePlayer = activePlayer == 0 ? 1 : 0;
  resetRoundScore();
  activePlayerStyling();
};

const activePlayerStyling = () => {
  let sectionStyling0 = document.querySelector('.player-0-panel').classList;
  let sectionStyling1 = document.querySelector('.player-1-panel').classList;
  sectionStyling0.toggle('active');
  sectionStyling1.toggle('active');
  };

const rollDice = document.querySelector('.btn-roll').
  addEventListener('click', () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice-1').style = 'block';
    document.querySelector('.dice-2').style = 'block';
    document.querySelector('.dice-1').src = `dice-${die1}.png`;
    document.querySelector('.dice-2').src = `dice-${die2}.png`;
  if( die1 != 1 || die2 != 1 ){
    roundScore += die1 + die2;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore.toString();
  }else{
    changeActivePlayer();
  }
});

const resetRoundScore = () => {
  roundScore = 0;
  if( activePlayer == 0 ){
    document.querySelector('#current-1').textContent = 0;
  }else{
    document.querySelector('#current-0').textContent = 0;
  }
};

const addRoundToTotalScore = () => {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
};

const winCondition = () => {
  if(scores[activePlayer] >= winScore) alert(`Player ${activePlayer + 1} has won`);
  // TODO: add logic to update styling for winner
};

const reset = document.querySelector('.btn-new').
  addEventListener('click', () => {
    if (confirm('Are you sure you want to start a new game?')) {
      scores = [0, 0];
      roundScore = 0;
      activePlayer = 0;
      document.querySelector('#score-0').textContent = '0';
      document.querySelector('#score-1').textContent = '0';
      document.querySelector('#current-0').textContent = '0';
      document.querySelector('#current-0').textContent = '0';
      // TODO: Set player one as active player
      setPlayerOneActive();
    }
  }
);
const setPlayerOneActive = () => {
  if(activePlayer === 0 ){
    // TODO add class for active to player 1 if it is not active
  }else{
    // TODO remove class for active if player 2 is active and apply it to player 1
  }
};

const hold = document.querySelector('.btn-hold').
  addEventListener('click', () => {
    winCondition();
    addRoundToTotalScore();
    changeActivePlayer();
  }
);
