# 🔐 AuthApp

**AuthApp** is a Node.js backend built with Express and MongoDB to handle user authentication and account management using JWT-based security and bcrypt password hashing.

---

## 🚀 Live API Endpoints

*(Replace `https://your-deploy-url.com` with your actual hosted URL)*

Base URL: `https://your-deploy-url.com/api/auth`

### 📋 API Specification

| Method | Endpoint            | Description                           | Request Body                                    | Response                           |
|--------|---------------------|---------------------------------------|--------------------------------------------------|-------------------------------------|
| POST   | `/register`         | Register a new user                   | `{ username, email, password }`                 | `{ token, user: { id, username, email } }` |
| POST   | `/login`            | Authenticate existing user           | `{ email, password }`                           | `{ token, user: { id, username, email } }` |
| GET    | `/me`               | Get current user profile              | Auth token in `Authorization: Bearer <token>`   | `{ id, username, email }`           |
| DELETE | `/me`               | Delete current user                   | Auth token in `Authorization: Bearer <token>`   | `{ message: "User deleted" }`      |
| POST   | `/refresh-token`    | Refresh JWT token                     | `{ token: <currentToken> }`                     | `{ token: <newToken> }`            |

---

## 🛠️ Tech Stack

- **Framework**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT tokens
- **Security**: Passwords hashed with bcrypt
- **Env Variables**: `.env` file

---

## 🧩 Core Files

- `index.js` – App entry point and route setup
- `models/User.js` – Mongoose user schema
- `routes/auth.js` – Defines auth-related endpoints
- `middleware/auth.js` – JWT token validation middleware
- `config/` – MongoDB connection logic

---

## ⚙️ Setup & Running Locally

1. **Clone and install dependencies**
    ```bash
    git clone https://github.com/amit15000/authapp.git
    cd authapp
    npm install
    ```

2. **Environment variables**: create a `.env` file:
    ```
    PORT=5000
    MONGO_URI=<Your MongoDB connection string>
    JWT_SECRET=<YourSecretKey>
    ```

3. **Start the server**
    ```bash
    npm start
    ```
    The API will be available at `http://localhost:5000/api/auth`.

---

## 🔗 Usage Examples

- **Register**
    ```bash
    curl -X POST http://localhost:5000/api/auth/register \
         -H "Content-Type: application/json" \
         -d '{"username":"john","email":"john@example.com","password":"secret"}'
    ```
- **Login**
    ```bash
    curl -X POST http://localhost:5000/api/auth/login \
         -H "Content-Type: application/json" \
         -d '{"email":"john@example.com","password":"secret"}'
    ```
- **Get Profile**
    ```bash
    curl http://localhost:5000/api/auth/me \
         -H "Authorization: Bearer <your_jwt_token>"
    ```
- **Delete Account**
    ```bash
    curl -X DELETE http://localhost:5000/api/auth/me \
         -H "Authorization: Bearer <your_jwt_token>"
    ```
- **Refresh Token**
    ```bash
    curl -X POST http://localhost:5000/api/auth/refresh-token \
         -H "Content-Type: application/json" \
         -d '{"token":"<current_token>"}'
    ```

---

## ✅ Notes & Best Practices

- 🔐 Always protect endpoints with JWT middleware.
- 🔄 Tokens expire — use refresh-token route to get a new one.
- 💾 User deletion only removes DB record; no cascade cleanup.
- 🔄 To deploy, ignore `package-lock.json` rebuild glitches — just `npm install` on target environment.

---

## 🧑‍💻 Author

**Amit Kumar** ([@amit15000](https://github.com/amit15000))

---

## 🌟 Contributions

Found this helpful? Please ⭐ star it, fork it to add features, or submit PRs for improvements! 💡
