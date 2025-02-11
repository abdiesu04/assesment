# Books API

A professional RESTful API for managing a collection of books with advanced features including authentication, search, filtering, and reviews.


## 📚 Documentation

- Full API documentation: [DOCUMENTATION.md](DOCUMENTATION.md)


## 🌟 Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Protected routes
  - User registration and login
  - Password hashing with bcrypt

- **Book Management**
  - Complete CRUD operations
  - Rich book metadata (title, author, ISBN, genres, etc.)
  - Book cover image support
  - Comprehensive validation



- **Security**
  - JWT authentication
  - Input validation
  - Rate limiting
  - Security headers
  - CORS protection



## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/abdiesu04/assesment.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. **Start the server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```



## 🔧 Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Books
- `POST /api/books` - Create a new book
- `GET /api/books` - Get all books (with filtering & pagination)
- `GET /api/books/:id` - Get a specific book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book
- `POST /api/books/:id/reviews` - Add a review
- `GET /api/books/search` - Search books



## 👨‍💻 Author


- GitHub: [@abdiesu04](https://github.com/abdiesu04)
- LinkedIn: [Abdi Esayas ](https://linkedin.com/in/abdiesu04) 