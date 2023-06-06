from flask import Flask, request, jsonify, send_from_directory
from flask_swagger_ui import get_swaggerui_blueprint
import os
import json

app = Flask(__name__)

# Конфігурація Swagger
SWAGGER_URL = '/api/docs'  # URL для Swagger UI
API_URL = '/swagger.json'  # URL для вашого OpenAPI/Swagger специфікації

# Функція для отримання Swagger UI blueprint
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "My API"  # Назва вашого API
    }
)

# Реєстрація Swagger UI blueprint
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

# Шлях до файлу з даними користувачів
USERS_FILE_PATH = 'users.json'


def load_users():
    if os.path.exists(USERS_FILE_PATH):
        with open(USERS_FILE_PATH, 'r') as file:
            users = json.load(file)
            return users
    return {}


def save_users(users):
    with open(USERS_FILE_PATH, 'w') as file:
        json.dump(users, file)


# Роут для створення нового користувача
@app.route('/api/users', methods=['POST'])
def create_user():
    users = load_users()
    user_data = request.get_json()
    user_id = len(users) + 1
    user_data['id'] = user_id
    users[user_id] = user_data
    save_users(users)
    return jsonify(user_data)


# Роут для оновлення даних користувача за ID
@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    users = load_users()
    if user_id in users:
        user_data = request.get_json()
        user_data['id'] = user_id
        users[user_id] = user_data
        save_users(users)
        return jsonify(user_data)
    return jsonify({'error': 'User not found'}), 404


# Роут для видалення користувача за ID
@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    users = load_users()
    if user_id in users:
        del users[str(user_id)]  # Зверніть увагу на перетворення user_id у рядковий тип
        save_users(users)
        return jsonify({'message': 'User deleted'})
    return jsonify({'error': 'User not found'}), 404


# Роут для отримання даних користувача за ID
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    users = load_users()
    if str(user_id) in users:  # Зверніть увагу на перетворення user_id у рядковий тип
        return jsonify(users[str(user_id)])  # Зверніть увагу на перетворення user_id у рядковий тип
    return jsonify({'error': 'User not found'}), 404


# Роут для отримання всіх користувачів
@app.route('/api/users', methods=['GET'])
def get_users():
    users = load_users()
    return jsonify(users)

@app.route('/swagger.json')
def swagger_json():
    return send_from_directory(os.getcwd(), 'swagger.json')


# Запуск сервера
if __name__ == '__main__':
    app.run()