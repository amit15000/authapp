# 🔐 AuthApp - Role-Based Authentication System

A secure role-based authentication system built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**.

It supports:
- User registration (`/signup`)
- Login and token-based authentication (`/login`)
- Protected routes for authenticated users (`/test`)
- Role-based access for `Student` and `Admin` (`/student`, `/admin`)

---

## 🚀 Live 

👉 [https://authapp-pt9w.onrender.com](https://authapp-pt9w.onrender.com)

---

## 📘 API Specification

| Method | Endpoint     | Access        | Input (JSON)                                                                                               | Output (JSON)                                                                                   |
|--------|--------------|---------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| POST   | `/signup`    | Public        | `{ "name": "Amit", "email": "amit@example.com", "password": "123456", "role": "Student" }`                 | `{ "success": true, "message": "User created successfully" }`                                   |
| POST   | `/login`     | Public        | `{ "email": "amit@example.com", "password": "123456" }`                                                    | `{ "sucess": true, "token": "...", "user": { ... }, "message": "User Logged in Successfully" }` |
| GET    | `/test`      | Authenticated | `{ "token": "jwt-token" }`                                                                                 | `{ "success": true, "message": "Welcome, you are authorized" }`                                 |
| GET    | `/student`   | Student Only  | `{ "token": "jwt-token" }`                                                                                 | `{ "success": true, "message": "Welcome to the protected route for students" }`                 |
| GET    | `/admin`     | Admin Only    | `{ "token": "jwt-token" }`                                                                                 | `{ "success": true, "message": "Welcome to the protected route for admin" }`                    |

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/amit15000/authapp
cd authapp
```

2. Install Dependencies

```bash
npm install
```
3. Configure Environment Variables
Create a .env file in the root directory:

.env
PORT = 5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. Start the Server
```bash
node index.js
```
The server will start on http://localhost:5000



👨‍💻 Author
Amit Kumar
📧 15000amitkumar@gmail.com
🌐 https://github.com/amit15000
