const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Масив для збереження коментарів
let comments = [];

// Обробка GET-запиту на шлях "/"
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Маршрут для отримання всіх коментарів
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Маршрут для збереження нового коментаря
app.post('/comments', (req, res) => {
  const name = req.body.name;
  const message = req.body.message;

  // Збереження коментаря у масиві
  comments.push({ name, message });

  // Виведення коментаря в консоль
  console.log(comments);

  res.status(200).json({ success: true });
});

// Маршрут для отримання списку коментарів
app.get('/comment-list', (req, res) => {
  res.json(comments);
});

// Маршрут для статичних файлів
app.use(express.static('.'));



app.post('/login', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  // Перевірка логіну та пароля у базі даних 

  // Приклад перевірки
  if (login === 'admin' && password === 'password') {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
});





app.post('/register', (req, res) => {
  const surname = req.body.surname;
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  // Збереження даних реєстрації в базі даних 

  // Приклад збереження 
  console.log('Дані реєстрації:', surname, name, email, username, password);

  // Відповідь про успішну реєстрацію
  res.status(200).json({ success: true });
});




// Запуск сервера 
app.listen(3000, () => {
  console.log('Сервер запущений на порті 3000');
});
