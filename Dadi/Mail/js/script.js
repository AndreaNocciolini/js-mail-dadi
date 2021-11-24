// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let playerDice = document.querySelector(`.player-dice`);
let computerDice = document.querySelector(`.computer-dice`);
console.log(playerDice, computerDice)

let player = document.getElementById(`player`);
let computer = document.getElementById(`computer`);
let result = document.getElementById(`result`);

let playerScore = parseInt(Math.floor(Math.random() * 6) + 1);
let computerScore = parseInt(Math.floor(Math.random() * 6) + 1);
let playerDiceScore = playerScore;
let computerDiceScore = computerScore;

player.innerHTML = `Player Score: ` + playerScore;
computer.innerHTML = `Computer Score: ` + computerScore;

if (playerScore > computerScore) {
    result.innerHTML = `You Win!`
}
else if (playerScore < computerScore) {
    result.innerHTML = `You Lose`
}
else {
    result.innerHTML = `Draw!`
}

if (playerDiceScore === 6) {
    playerDice.className += ` dice-6`;
}
else if (playerDiceScore === 5) {
    playerDice.className += ` dice-5`;
}
else if (playerDiceScore === 4) {
    playerDice.className += ` dice-4`;
}
else if (playerDiceScore === 3) {
    playerDice.className += ` dice-3`;
}
else if (playerDiceScore === 2) {
    playerDice.className += ` dice-2`;
}
else if (playerDiceScore === 1) {
    playerDice.className += ` dice-1`;
}






if (computerDiceScore === 1) {
    computerDice.classList.add(`dice-1`);
}
else if (computerDiceScore === 2) {
    computerDice.classList.add(`dice-2`);
}
else if (computerDiceScore === 3) {
    computerDice.classList.add(`dice-3`);
}
else if (computerDiceScore === 4) {
    computerDice.classList.add(`dice-4`);
}
else if (computerDiceScore === 5) {
    computerDice.classList.add(`dice-5`);
}
else if (computerDiceScore === 6) {
    computerDice.classList.add(`dice-6`);
}