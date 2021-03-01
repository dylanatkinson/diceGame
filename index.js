// Getting DOM elements
let startGameBtn = document.querySelector('#start-button');
let rollBtn = document.querySelector('#roll-button');
let diceImage = document.querySelector('.dice');
let gameInstructions = document.querySelector('.game-instructions');
let displayScore = document.querySelector('.your-score');

// Setting the score to nothing
let score = null;

// Game over parameters
const gameOver = function (numberRolled, score) {
    rollBtn.disabled = true;
    if (numberRolled === 1) {
        displayScore.innerHTML = `
        <p>You rolled 1, game over!</p>
        `;
    } else {
        displayScore.innerHTML = `
        <p>You Won! Final Score: ${score}</p>
        `;
    }
    setTimeout(resetGame, 3000);
}

// Resets the game to play again
const resetGame = function () {
    rollBtn.disabled = false;
    rollBtn.style.visibility = 'hidden';
    gameInstructions.style.visibility = 'visible';
    displayScore.innerHTML = '';
    startGameBtn.style.visibility = 'visible';
    score = null;
}

// This function sets up the game
const startGame = function () {
    startGameBtn.style.visibility = 'hidden';
    gameInstructions.style.visibility = 'hidden';
    rollBtn.style.visibility = 'visible';
    displayScore.style.visibility = 'visible';
}

// Function to roll the dice
const rollTheDice = function () {
    let numberRolled = Math.ceil(Math.random() * 6); 
    score += numberRolled;
    displayScore.innerHTML = `
    <p>Your Score: ${score}</p>
    `;
    diceImage.src = `img/dice${numberRolled}.png`;
    if(numberRolled === 1 || score > 20) {
        gameOver(numberRolled, score);
    }
}

// Event listeners for buttons clicked
startGameBtn.addEventListener('click', startGame);
rollBtn.addEventListener('click', rollTheDice);
document.addEventListener('DOMContentLoaded', resetGame);