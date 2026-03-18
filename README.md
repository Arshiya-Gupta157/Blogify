# 📘 Blogify

A full-stack blogging platform built with **Node.js, Express, MongoDB, and EJS**, where users can create, explore, and interact with blogs in a simple and intuitive environment.

---

## 🚀 Overview

**Blogify** is a server-side rendered web application that allows users to:

- Create and publish blogs with images
- Browse and read blogs from other users
- Add comments to blog posts
- Authenticate securely using JWT

The project follows a structured **MVC architecture**, ensuring scalability and maintainability.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB (with Mongoose ODM)

### Frontend
- EJS (Embedded JavaScript Templates)
- HTML
- CSS

### Authentication
- JSON Web Tokens (JWT)

### File Handling
- Multer (for image uploads)

---

## 📂 Project Structure

```bash
Blogify/
│
├── index.js                 # Entry point of the application
├── package.json            # Project dependencies
├── .env                    # Environment variables
│
├── models/                 # Mongoose schemas
│   ├── user.js
│   ├── blog.js
│   └── comment.js
│
├── router/                 # Route handlers
│   ├── user.js
│   └── blog.js
│
├── middleware/             # Custom middleware
│   └── authentication.js
│
├── services/               # Business logic (JWT handling)
│   └── authentication.js
│
├── views/                  # EJS templates
│   ├── home.ejs
│   ├── blog.ejs
│   ├── addBlog.ejs
│   ├── signin.ejs
│   ├── signup.ejs
│   └── partials/
│
├── public/                 # Static files
│   ├── images/
│   └── uploads/            # Uploaded blog images
│
└── controller/             # (Optional / future use)
```

---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- 📝 Create and Read Blogs
- 🖼️ Image Upload for Blog Posts
- 💬 Comment System
- 📄 Server-Side Rendering with EJS
- 🧩 MVC Architecture
- 🔒 Protected Routes using Middleware

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd blogify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Application

```bash
npm start
```

Visit:  
http://localhost:3000

---

## 🔄 Application Flow

### Authentication
- Users register and log in
- JWT is generated and used for protected routes

### Blog Creation
- Authenticated users can create blogs with images
- Images are stored in `/public/uploads`

### Blog Viewing
- All blogs are displayed on the homepage
- Individual blog pages include comments

### Commenting
- Logged-in users can comment on blogs

---

## 🧠 Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

- **Model** → Database schemas (User, Blog, Comment)
- **View** → EJS templates for UI rendering
- **Controller/Routes** → Handle request logic and responses

---

## 🔐 Security Features

- Password hashing (bcrypt)
- JWT-based authentication
- Protected routes via middleware

---
## 🔮 Future Enhancements

- Pagination and search functionality
- Cloud storage integration (e.g., Cloudinary)
- Rich text editor for blog content
- Like/Bookmark system
- REST API + React frontend

---

## 👩‍💻 Author

**Arshiya Gupta**

---
