const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomPrenom = formulaire.querySelector('input[type="text"]').value;
  const numeroTel = formulaire.querySelector('input[type="tel"]').value;
  const date = formulaire.querySelector('input[type="date"]').value;
  const opinion = formulaire.querySelector('textarea').value;
  const choix = formulaire.querySelector('select').value;

});