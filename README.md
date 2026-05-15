# BlogApp

A full-stack MERN Blog Application where users can explore blogs, create posts, interact with content, and manage their profiles. The platform supports authentication, blog management, comments, and admin functionalities.

---

# 🚀 Features

## 👤 User Features

* User Registration & Login
* JWT Authentication
* View all blogs
* Read blog details
* Like and comment on blogs
* Search blogs by title/category
* Update profile information
* Responsive UI for mobile and desktop

## ✍️ Author Features

* Create new blog posts
* Edit existing blogs
* Delete blogs
* Upload blog images
* Manage personal blog posts
* Track blog engagement

## 🛡️ Admin Features

* Manage all users
* Delete inappropriate blogs/comments
* Monitor platform activity
* Manage categories/tags

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Context API / Redux
* Axios
* Tailwind CSS / CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

---

# 📂 Folder Structure

```bash
BlogApp/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.js
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/BlogApp.git
cd BlogApp
```

---

## 2️⃣ Setup Backend

```bash
cd Backend
npm install
```

### Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Backend Server

```bash
npm start
```

---

## 3️⃣ Setup Frontend

```bash
cd Frontend
npm install
npm start
```

The frontend will run on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication

This project uses:

* JWT (JSON Web Token)
* Protected Routes
* Password Hashing using bcrypt.js

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

* Home Page
* Login Page
* Blog Details Page
* Dashboard
* Admin Panel

---

# 🌟 Future Enhancements

* Rich Text Editor
* Dark Mode
* Blog Categories & Tags
* Bookmark Blogs
* Notifications
* Real-time Chat
* AI Blog Suggestions
* Social Media Sharing

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to your branch
6. Create a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

Developed by Deekshitha Gorugantala.
