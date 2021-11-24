// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let player = document.getElementById(`player`);
let computer = document.getElementById(`computer`);
let result = document.getElementById(`result`);
console.log(player, computer, result);
let playerScore = parseInt(Math.floor(Math.random() * 6) + 1);
let computerScore = parseInt(Math.floor(Math.random() * 6) + 1);
console.log(playerScore, computerScore);

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