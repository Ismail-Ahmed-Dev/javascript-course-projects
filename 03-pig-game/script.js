"use strict";
const scorePlayerOne = document.querySelector("#score--0");
const scorePlayerTwo = document.querySelector("#score--1");
const currentScoreOne = document.getElementById("current--0");
const currentScoreTwo = document.getElementById("current--1");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const diceImage = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
diceImage.classList.add("hidden");

let activePlayer, playerScore, currentScore, playing;

// New game
function init() {
  activePlayer = 0;
  playerScore = [0, 0];
  currentScore = 0;
  playing = true;

  scorePlayerOne.textContent = 0;
  scorePlayerTwo.textContent = 0;
  currentScoreOne.textContent = 0;
  currentScoreTwo.textContent = 0;

  playerOne.classList.remove("player--winner");
  playerTwo.classList.remove("player--winner");
  diceImage.classList.add("hidden");
  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");
}

init();

// Switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle("player--active");
  playerTwo.classList.toggle("player--active");
}

function handleRoll() {
  if (playing) {
    // Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
}

// Hold function
function holdScore() {
  if (playing) {
    // 1.Add current score to active player's score
    playerScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScore[activePlayer];
    if (playerScore[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceImage.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      // Switch player
      switchPlayer();
    }
  }
}

btnNew.addEventListener("click", init);
btnRoll.addEventListener("click", handleRoll);
btnHold.addEventListener("click", holdScore);
