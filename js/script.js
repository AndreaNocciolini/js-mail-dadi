// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mailArray = [`chiara@gmail.com`, `acquarius@gmail.com`, `andrea@yahoo.com`, `rossi-ste99@gmail.com`, `fuleio69@alice.it`, `xxdarksoldierxx@virgilio.it`];
const validityText = document.querySelector(`.validity-text`);
const mail = prompt(`Insert your email`);
const html = document.querySelector(`html`);

let validity = false;


for (let i = 0; i < mailArray.length; i++) {
    const element = mailArray[i];
    
    if (mail == element) {
        validity = true;
    }
}

if (validity == true) {
    validityText.innerHTML = `Welcome ${mail}!`;
    html.classList.add(`validity-true`);
}
else if (validity == false) {
    validityText.innerHTML = `You're not on the list.`;
    html.classList.add(`validity-false`);
}