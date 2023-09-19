const formulaire = document.querySelector("form");
const resultatsDiv = document.getElementById("resultats");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomPrenom = formulaire.querySelector('input[type="text"]').value;
  const numeroTel = formulaire.querySelector('input[type="tel"]').value;
  const date = formulaire.querySelector('input[type="date"]').value;
  const opinion = formulaire.querySelector("textarea").value;
  const choix = formulaire.querySelector("select").value;

  const message = `
    <h2>Informations transmises :</h2>
    <p><strong>Nom/Prénom :</strong> ${nomPrenom}</p>
    <p><strong>Numéro de téléphone :</strong> ${numeroTel}</p>
    <p><strong>Date :</strong> ${date}</p>
    <p><strong>Opinion :</strong> ${opinion}</p>
    <p><strong>Choix :</strong> ${choix}</p>
  `;
  resultatsDiv.innerHTML = message;
});
