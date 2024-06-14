/*document.getElementById('registration-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    window.location.href = 'https://driveadsgo.com/';
  });*/
  


  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
      gender: formData.get('gender'),
      age: formData.get('age'),
      email: formData.get('email')
    };
  
    firebase.database().ref('registrations').push(data)
      .then(() => {
        
        window.location.href = 'https://driveadsgo.com/';
      })
      .catch((error) => {
        console.error('Erro ao salvar os dados:', error);
        alert('Erro ao salvar os dados. Tente novamente.');
      });
  });
  