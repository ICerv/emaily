//ZADANI 1.
/*
Vytvoříme jednoduchou aplikaci, která zobrazuje obsah e-mailové schránky.

Vytvořte si repozitář ze šablony cviceni-emaily aplikace pro práci s e-maily.
Prohlédněte si dokumentaci k e-mailovému API. V prohlížeči si vyzkoušejte, jak API funguje.
Podívejte se, jak se v HTML vytváří jeden e-mail.
Smažte v HTML obsah elementu #inbox. Zobrazte na stránce e-maily stažené z API. Tělo e-mailu nechte prozatím prázdné.

*/

const renderEmails = (emails) => {
  const inboxElm = document.querySelector('#inbox');
  inboxElm.innerHTML += emails
    .map((email) => `
    <div class="email">
        <div class="email__head">
          <button class="email__icon email__icon--closed"></button>
          <div class="email__info">
            <div class="email__sender">${email.sender.name}</div>
            <div class="email__subject">${email.subject}</div>
          </div>
          <div class="email__time">${email.time}</div>
        </div>
        <div class="email__body"></div>
      </div>
    `
    )
    .join('');
}
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then((response) => response.json())
  .then((data) => renderEmails(data.emails))