/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

  Challenges:
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

const rollDice = document.querySelector('.btn-roll').
  addEventListener('click', () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice-1').style = 'block';
    document.querySelector('.dice-2').style = 'block';
    document.querySelector('.dice-1').src = `dice-${die1}.png`;
    document.querySelector('.dice-2').src = `dice-${die2}.png`;
    updateCurrentScore();
  }
);

const updateCurrentScore = () => {
  //check for a score of 1 on either die
  let total = 0;
  if( rollDice.die1 !== 1 && rollDice.die2 !== 1 ){
    total += die1 + die2;
    winCondition();
    roundScore += total;
    document.querySelector(`#score${activePlayer}`).textContent = roundScore.toString();
    // TODO: update roundScore
  }else{
    // TODO: add logic to switch player
  }
};

const changeActivePlayer = () => {
  activePlayer = activePlayer == 0 ? 1 : 0;
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
    }
  }
);

const hold = document.querySelector('.btn-hold').
  addEventListener('click', () => {
    addRoundToTotalScore();
    activePlayerstyling()
    changeActivePlayer()
    winCondition();
  }
);
