const commentList = document.getElementById('comment-list');
const commentForm = document.getElementById('comment-form');
const nameInput = document.getElementById('comment-name');
const messageInput = document.getElementById('comment-message');

// Функція для очищення форми
function clearForm() {
  nameInput.value = '';
  messageInput.value = '';
}

// Функція для відображення коментарів
function displayComments() {
  fetch('/comments')
    .then(response => response.json())
    .then(data => {
      // Очистка списку коментарів перед відображенням нових
      commentList.innerHTML = '';

      // Відображення кожного коментаря
      data.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.textContent = comment.message;
        commentList.appendChild(commentItem);
      });
    })
    .catch(error => {
      console.error('Помилка запиту до сервера:', error);
    });
}

// Обробка події надсилання форми
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;

  // Очищення форми
  clearForm();

  // Відправка коментаря на сервер
  fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, message })
  })
    .then(response => {
      if (response.ok) {
        // Успішно опубліковано
        displayComments();
      } else {
        // Помилка при опублікуванні коментаря
        console.error('Помилка при опублікуванні коментаря');
      }
    })
    .catch(error => {
      // Помилка з'єднання або інша помилка
      console.error('Помилка з\'єднання або інша помилка:', error);
    });
});

// Відображення початкового списку коментарів
displayComments();
