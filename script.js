'use strict';
let score = 20;
let highscore = 0;

function randomNumber(n) {
    return Math.floor(Math.random()*n)+1;
}

let random = randomNumber(20);

function checkWinner(guess) {
    let text = "";
    if(guess<1 || guess>20) {
        text = `Value must be between 1 and 20`;
    } else {
        if(guess < random) {
            text = `Too small!`;
            if(score >=1)
                score--;
        } else if(guess > random) {
            text = `Too big!`;
            if(score >=1)
                score--;
        } else {
            text = `Winner!`;
            if(score >= highscore)
                highscore = score;
            document.querySelector('body').style.backgroundColor = 'green';
        }
    }
    return text;
}

function updateScores() {
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.check').addEventListener('click',(e) => {
    let guess = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message');
    message.textContent = checkWinner(guess);
    updateScores();
});

document.querySelector('.again').addEventListener('click',function() {
    score = 0;
    random = randomNumber(20);
    document.querySelector('body').style.backgroundColor = 'black';
    updateScores();
});