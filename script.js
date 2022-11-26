'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const setNumberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};
const setBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    setNumber(secretNumber);
    setBodyColor('#60b347');
    setNumberStyle('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💀 You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  setScore(score);
  setNumber('?');
  setBodyColor('#4b056f');
  setNumberStyle('15rem');
});
