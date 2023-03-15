'use strict';

// console.log(document.querySelector('.message').textContent);

//DOM-stands for Document Object Model
//WEB API-stands for WEB Application Programming Interface. DOM Methods and Properties  <==> can Interact with JavaScript
//WEB API - browsers like Chrome, Safari, Mazilla, Edge(Microsoft)...

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //when there is no input:
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }
    //when the players win:
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        //styling scc:
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '60rem';

        //Implementaion of highscore:
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }

    //when the number too low:
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            score = score - 1;//score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Loose the game!';

        }
        //styling scc:
        document.querySelector('body').style.backgroundColor = '#FF0000';
    }

    //when the number too high:
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too high!';
            score = score - 1;//score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Loose the game!';
        }
        document.querySelector('body').style.backgroundColor = '#FF0000';

    }

});

//Implementaion of Again button:

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


