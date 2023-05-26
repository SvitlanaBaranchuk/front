document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var surname = document.getElementById('surname').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Відправка даних на сервер за допомогою AJAX 
  // Отримання відповіді від сервера та обробка результатів реєстрації

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ surname, name, email, username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Реєстрація успішна
      alert('Ви успішно зареєструвалися! Ви можете увійти на сайт.');
      window.location.href = 'login.html'; 
    } else {
      // Реєстрація не вдалась
      alert('Помилка реєстрації. Будь ласка, спробуйте знову.');
    }
  })
  .catch(error => {
    console.error('Помилка при відправці запиту:', error);
    alert('Сталася помилка при відправці запиту на сервер. Будь ласка, спробуйте знову.');
  });
});
