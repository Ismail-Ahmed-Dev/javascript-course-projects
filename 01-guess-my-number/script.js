"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let message = document.querySelector(".message");
let secretNumber = document.querySelector(".number");
let pageBody = document.querySelector("body");
let scoreGame = document.querySelector(".score");
let highScoreValue = document.querySelector(".highscore");
let guessValue = document.querySelector(".guess");
let isPlaying = true;

function playAgain() {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  pageBody.style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
  scoreGame.textContent = score;
  message.textContent = "Start guessing...";
  secretNumber.textContent = "?";
  guessValue.value = "";
}

function checkNumber() {
  if (!isPlaying) return;
  let inputNumber = Number(guessValue.value);

  if (number === inputNumber) {
    message.textContent = "Correct Number";
    pageBody.style.backgroundColor = "#60b347";
    secretNumber.textContent = number;
    scoreGame.textContent = score;
    secretNumber.style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      highScoreValue.textContent = highScore;
    }
    isPlaying = false;
    return;
  } else {
    if (!inputNumber || inputNumber > 20 || inputNumber < 1) {
      message.textContent = "Enter Number Between 1 and 20";
    } else {
      score--;
      scoreGame.textContent = score;
      message.textContent =
        inputNumber > number ? "📈 Too High " : "📉 Too Low ";

      if (score === 0) {
        message.textContent = "You Lost..!";
        isPlaying = false;
        return;
      }
    }
  }
}

let btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", checkNumber);

let againBtn = document.querySelector(".again");
againBtn.addEventListener("click", playAgain);
