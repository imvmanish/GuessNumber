'use strict';
let score = 20;
let highscore = 0;

function randomNumber(n) {
    return Math.floor(Math.random()*n)+1;
}

let random = randomNumber(20);
document.querySelector('.number').textContent = random;

//Winner Check
function checkWinner(guess) {
    let text = "";
    if(guess<1 || guess>20) {
        text = `Value must be between 1 and 20`;
    } else {
        if(guess < random) {
            text = `Too small!`;
        } else if(guess > random) {
            text = `Too big!`;
        } else {
            text = `Winner!`;
        }
    }
    return text;
}

document.querySelector('.check').addEventListener('click',(e) => {
    let guess = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message');
    message.textContent = checkWinner(guess);
});
