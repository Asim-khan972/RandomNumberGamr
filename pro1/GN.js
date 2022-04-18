'use strict';

// Selectors
//
const checkbtn = document.querySelector('.check');
var number = Math.trunc(Math.random() * 20 + 1);

var score = 20;
let HighScore = 0;

// Again Button Code
document.querySelector('.Again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Sart Guessing';
  document.querySelector('.random-number').textContent = '??';
  document.querySelector('.Score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
});

// Add EventListner
checkbtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When User Enter Nothing
  //
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // When Number is matched
  //
  else if (number === guess) {
    document.querySelector('.message').textContent =
      'Congrats! Correct  Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.random-number').style.width = '50px';

    //
    document.querySelector('.random-number').textContent = number;

    // highScore

    if (score > HighScore) {
      HighScore = score;
      document.querySelector('.HighScore').textContent = HighScore;
    }
  }
  // When number is to high
  //
  else if (number < guess) {
    // When Score is Greater then Zero
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.Score').textContent = score;
    }
    // When We loose the Game
    else {
      document.querySelector('.message').textContent =
        'You Loose!!!! the Game ';
      document.querySelector('.Score').textContent = 0;
    }
    // When Number is too low
  } else if (number > guess) {
    // When Score is Greater then Zero
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low ';
      score--;
      document.querySelector('.Score').textContent = score;
    }
    // When We loose the Game
    else {
      document.querySelector('.message').textContent =
        'You Loose!!!! the Game ';
      document.querySelector('.Score').textContent = 0;
    }
  }
});
