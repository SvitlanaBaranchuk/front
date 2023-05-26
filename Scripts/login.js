document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;

  // Відправка даних на сервер за допомогою AJAX 
  // Отримання відповіді від сервера та перевірка статусу авторизації

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ login, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Авторизація успішна
      window.location.href = 'main.html'; 
    } else {
      // Авторизація неуспішна
      alert('Неправильний логін або пароль. Будь ласка, спробуйте ще раз.');
    }
  })
  .catch(error => {
    console.error('Помилка авторизації:', error);
  });
});
