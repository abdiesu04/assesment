# Books API

A professional RESTful API for managing a collection of books with advanced features including authentication, search, filtering, and reviews.

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

- **Advanced Features**
  - Search functionality with text indexing
  - Filtering by multiple criteria
  - Sorting options
  - Pagination
  - User reviews and ratings
  - Book statistics

- **Security**
  - JWT authentication
  - Input validation
  - Rate limiting
  - Security headers
  - CORS protection

- **Documentation**
  - Swagger/OpenAPI documentation
  - Postman collection
  - Detailed API documentation
  - Code comments

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd books-api
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

## 📚 Documentation

- Full API documentation: [DOCUMENTATION.md](DOCUMENTATION.md)
- Swagger UI: http://localhost:3000/api-docs
- Postman Collection: [Books-API.postman_collection.json](Books-API.postman_collection.json)

## 🔧 Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest, Supertest
- **Security**: helmet, cors, rate-limiting

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

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🔒 Security Features

- JWT authentication for protected routes
- Password hashing using bcrypt
- Input validation and sanitization
- Rate limiting for API requests
- CORS enabled
- Security headers with Helmet
- Environment variables for sensitive data

## 🚀 Deployment

### Heroku
```bash
heroku create
git push heroku main
```

### Docker
```bash
docker build -t books-api .
docker run -p 3000:3000 books-api
```

## 📈 Future Enhancements

- OAuth 2.0 integration
- Email verification
- Password reset functionality
- Advanced search with Elasticsearch
- Image upload with cloud storage
- Caching with Redis
- WebSocket real-time updates

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile) 