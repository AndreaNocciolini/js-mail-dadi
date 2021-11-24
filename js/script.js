// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mailArray = [`chiara@gmail.com`, `acquarius@gmail.com`, `andrea@yahoo.com`, `rossi-ste99@gmail.com`, `fuleio69@alice.it`, `xxdarksoldierxx@virgilio.it`]
console.log(mailArray);
console.log(mailArray.length);

const mail = document.getElementById(`insert-mail`);
const mailButton = document.getElementById(`mail-button`);
console.log(mail)
console.log(mailButton)

for (let i = 0; i < mailArray.length; i++) {
    const element = mailArray[i];
    console.log(element);
}
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.