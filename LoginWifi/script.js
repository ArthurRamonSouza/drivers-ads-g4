import { database } from './firebase.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      gender: formData.get('gender'),
      age: formData.get('age'),
      email: formData.get('email')
    };

    push(ref(database, 'registrations'), data)
      .then(() => {
        console.log('Dados salvos com sucesso');

        window.location.href = 'https://driveadsgo.com/';
      })
      .catch((error) => {
        console.error('Erro ao salvar os dados:', error);
        alert('Erro ao salvar os dados. Tente novamente.');
      });
  });
});
