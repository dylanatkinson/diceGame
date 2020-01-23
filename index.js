// sets variables for the dice roll and scoring
let numberRolled;
let points = 0;

// collects p elements for roll-btn button, player score, dice image, current score and win or lose from html file
const rollButton = document.getElementById("roll-btn");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const currentScore = document.getElementById("currentScore");
const winOrLose = document.getElementById("winOrLose");

// sets dice image to not show
diceImage.style.visibility = "hidden";

// rolls the dice to give a random number between 1 and 6
const rollDice = () => {
    numberRolled = Math.ceil(Math.random() * 6);
    console.log(`The random roll is ${numberRolled}`);
};

// if statement to display the message if you win/lose
const winLoss = () => {
    if (numberRolled == 1) {
        winOrLose.textContent = "You lose.";
        winOrLose.style.visibility = "visible";
        points = 0;
        rollButton.textContent = "Try Again?";
    } else if (points >= 20) {
        winOrLose.textContent = "You won!";
        winOrLose.style.visibility = "visible";
        points = 0;
        rollButton.textContent = "Play Again?";
    } else {
        rollButton.textContent = "Click to Roll";
    };
};

// function to add the number rolled by the dice to the points scored by the player
const logScore = () => {
    points += numberRolled;
    console.log(`Then added to the points is ${points}`);
};

// event listener to perform functions when the button is clicked
rollButton.addEventListener("click", () => {
    // hides the win/loss message
    winOrLose.style.visibility = "hidden";
    // console.log("button clicked");
    rollDice();
    playerScore.textContent = `Dice Roll: ${numberRolled}`;
    diceImage.style.visibility = "visible";
    // changes the dice image to the one matching the number rolled
    diceImage.src = `img/dice${numberRolled}.png`;
    logScore();
    currentScore.textContent = `Current Score: ${points}`;
    winLoss();
});