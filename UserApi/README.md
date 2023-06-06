# Instalation

### 1.Clone repository 

git clone https://github.com/SvitlanaBaranchuk/front

### 2. Open project folder

cd <project-directory>

### 3. Install properties

pip install -r requirements.txt

# Using

### Start API Server:

python main.py

### Get access to API with basic URL-path:

http://localhost:5000/api/docs/


# User API Documentation

API for managing user data

## Endpoints

1. `GET /api/users`: Get all users
   - Response: 200 OK
   - Response Body: Object containing all users
   
2. `POST /api/users`: Create a new user
   - Request Body: 
     - name (string): User's name
     - surname (string): User's surname
     - email (string): User's email
     - phone_number (string): User's phone number
     - login (string): User's login
     - password (string): User's password
     - username (string): User's username
   - Response: 200 OK
   - Response Body: Object containing the created user
   
3. `GET /api/users/{user_id}`: Get user by ID
   - Path Parameter: 
     - user_id (integer): ID of the user
   - Response: 
     - 200 OK: User found
     - 404 Not Found: User not found
     
4. `PUT /api/users/{user_id}`: Update user by ID
   - Path Parameter: 
     - user_id (integer): ID of the user
   - Request Body: Same as the POST request body
   - Response: 
     - 200 OK: User updated
     - 404 Not Found: User not found
     
5. `DELETE /api/users/{user_id}`: Delete user by ID
   - Path Parameter: 
     - user_id (integer): ID of the user
   - Response: 
     - 200 OK: User deleted
     - 404 Not Found: User not found

## How to Use

To use the User API, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the required dependencies: `pip install -r requirements.txt`
3. Run the API server: `python main.py`
4. Access the API using the base URL: `http://localhost:5000`

## Examples

### Get all users

GET /api/users

#### Response:
```json
{
  "1": {
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890",
    "login": "johndoe",
    "password": "password",
    "username": "john20",
    "id": 1
  },
  "2": {
    "name": "Jane",
    "surname": "Smith",
    "email": "jane.smith@example.com",
    "phone_number": "9876543210",
    "login": "janesmith",
    "password": "password",
    "username": "jane1995",
    "id": 2
  }
}
```

### Create a new user

POST /api/users

#### Request Body:

```
{
  "name": "Alice",
  "surname": "Johnson",
  "email": "alice.johnson@example.com",
  "phone_number": "5555555555",
  "login": "alicejohnson",
  "password": "password",
  "username": "al1998"
}
```

#### Response:

```
{
  "name": "Alice",
  "surname": "Johnson",
  "email": "alice.johnson@example.com",
  "phone_number": "5555555555",
  "login": "alicejohnson",
  "password": "password",
  "username": "al1998",
  "id": 3
}
```

### Get user by ID

GET /api/users/1

#### Response:

```
{
  "name": "John",
  "surname": "Doe",
  "email": "john.doe@example.com",
  "phone_number": "1234567890",
  "login": "johndoe",
  "password": "password",
  "username": "john20",
  "id": 1
}
```

### Update user by ID

PUT /api/users/2

#### Request Body:

```
{
  "name": "Jane",
  "surname": "Johnson",
  "email": "jane.johnson@example.com",
  "phone_number": "5555555555",
  "login": "janejohnson",
  "password": "newpassword",
  "username": "jane1995"
}
```

#### Response:

```
{
  "name": "Jane",
  "surname": "Johnson",
  "email": "jane.johnson@example.com",
  "phone_number": "5555555555",
  "login": "janejohnson",
  "password": "newpassword",
  "username": "jane1995",
  "id": 2
}
```

### Delete user by ID

DELETE /api/users/3

#### Response:

```
{
  "message": "User deleted"
}
```

