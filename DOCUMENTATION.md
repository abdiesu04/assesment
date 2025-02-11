# Books API Documentation

A professional RESTful API for managing a collection of books with advanced features including authentication, search, filtering, and reviews.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Security](#security)

## Features

- 🔐 JWT Authentication
- 📚 Complete CRUD operations for books
- 🔍 Advanced search and filtering
- 📄 Pagination
- 📝 User reviews and ratings
- 📊 Book statistics
- 🏷️ Categories and tags
- 🖼️ Book cover image support
- 📱 Mobile-friendly API design
- 📖 Comprehensive documentation
- ✨ Input validation
- 🔄 Error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Swagger for API documentation
- Various NPM packages (see package.json)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Postman (for testing API endpoints)

### Environment Variables Setup

1. Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=development  # Use 'production' for production environment

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/books_db
# Local MongoDB Alternative:
# MONGODB_URI=mongodb://localhost:27017/books_db

# JWT Configuration
JWT_SECRET=your_super_secret_key_here  # Change this to a strong secret key
JWT_EXPIRE=30d  # Token expiration time

# Rate Limiting
RATE_LIMIT_WINDOW=15  # Time window in minutes
RATE_LIMIT_MAX=100    # Maximum requests per window

# Optional Configurations
CORS_ORIGIN=*         # Use specific domain in production, e.g., https://yourapp.com
UPLOAD_PATH=./uploads # Path for file uploads
```

### Environment Variables Guide

1. **Server Configuration**:
   - `PORT`: The port number for the server (default: 3000)
   - `NODE_ENV`: Current environment ('development' or 'production')

2. **MongoDB Configuration**:
   - For MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   ```
   - For Local MongoDB:
   ```env
   MONGODB_URI=mongodb://localhost:27017/books_db
   ```

3. **JWT Configuration**:
   - `JWT_SECRET`: Used for token generation/verification
   - Example of a strong secret:
   ```env
   JWT_SECRET=booksApi_9$secretKey#2024
   ```

4. **Production Environment Example**:
```env
PORT=80
NODE_ENV=production
MONGODB_URI=mongodb+srv://prod_user:secure_password@production.mongodb.net/books_db
JWT_SECRET=your_production_secret_key
CORS_ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Using Environment Variables

1. **Development Setup**:
```bash
# 1. Copy the example .env file
cp .env.example .env

# 2. Edit the .env file with your values
nano .env  # or use your preferred editor

# 3. Start the development server
npm run dev
```

2. **Production Setup**:
```bash
# 1. Create production .env file
cp .env.example .env.production

# 2. Edit with production values
nano .env.production

# 3. Start with production environment
NODE_ENV=production npm start
```

3. **Docker Setup**:
```bash
# Using environment file
docker run -p 3000:3000 --env-file .env books-api

# Or using environment variables directly
docker run -p 3000:3000 \
  -e MONGODB_URI=your_mongodb_uri \
  -e JWT_SECRET=your_jwt_secret \
  books-api
```

### Environment Variables Security

1. **Never commit .env files to version control**
2. **Use different values for different environments**
3. **Regularly rotate sensitive values like JWT_SECRET**
4. **Use strong, unique values for production**

### Troubleshooting Environment Variables

1. **MongoDB Connection Issues**:
```env
# Check if MongoDB is running locally
MONGODB_URI=mongodb://localhost:27017/books_db

# For Atlas, ensure correct username and password
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/books_db
```

2. **JWT Token Issues**:
```env
# Ensure JWT_SECRET is set and strong
JWT_SECRET=your_strong_secret_key

# Adjust token expiration if needed
JWT_EXPIRE=30d  # or '24h', '60m', etc.
```

3. **Port Conflicts**:
```env
# Change port if 3000 is in use
PORT=3001
```

4. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:3000`
Swagger documentation will be available at `http://localhost:3000/api-docs`

## API Documentation

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/register
Content-Type: application/json

{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword123"
}

Response (201 Created):
{
    "_id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "token": "jwt_token"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "securepassword123"
}

Response (200 OK):
{
    "_id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "token": "jwt_token"
}
```

### Books Endpoints

#### Create New Book
```http
POST /api/books
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10",
    "numberOfPages": 180,
    "isbn": "978-0743273565",
    "genres": ["Fiction"],
    "description": "A story of decadence and excess...",
    "price": 9.99,
    "language": "English",
    "publisher": "Scribner",
    "tags": ["classic", "american-literature"]
}

Response (201 Created):
{
    "_id": "book_id",
    "title": "The Great Gatsby",
    ...
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
}
```

#### Get All Books (with filtering and pagination)
```http
GET /api/books?page=1&limit=10&genre=Fiction&sort=rating
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "books": [...],
    "page": 1,
    "totalPages": 5,
    "totalBooks": 48
}
```

#### Get Book by ID
```http
GET /api/books/:id
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "_id": "book_id",
    "title": "The Great Gatsby",
    ...
    "reviews": [],
    "rating": 4.5,
    "numReviews": 100
}
```

#### Update Book
```http
PUT /api/books/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
    "price": 14.99,
    "inStock": false
}

Response (200 OK):
{
    "_id": "book_id",
    "title": "The Great Gatsby",
    "price": 14.99,
    "inStock": false,
    ...
}
```

#### Delete Book
```http
DELETE /api/books/:id
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "message": "Book removed successfully"
}
```

#### Add Review
```http
POST /api/books/:id/reviews
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
    "rating": 5,
    "comment": "Excellent book, highly recommended!"
}

Response (201 Created):
{
    "_id": "book_id",
    "reviews": [...],
    "rating": 4.5,
    "numReviews": 101
}
```

### Advanced Features

#### Search Books
```http
GET /api/books/search?q=gatsby
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "results": [...],
    "total": 1
}
```

#### Filter by Genre
```http
GET /api/books?genre=Fiction
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "books": [...],
    "total": 25
}
```

#### Sort Books
```http
GET /api/books?sort=rating,desc
Authorization: Bearer <jwt_token>

Response (200 OK):
{
    "books": [...],
    "total": 48
}
```

## Error Handling

The API uses conventional HTTP response codes:
- 2xx for successful requests
- 4xx for client errors
- 5xx for server errors

Example error response:
```json
{
    "message": "Book not found",
    "stack": "Error stack trace (only in development)"
}
```

## Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Testing with Environment Variables

### Running Tests
```bash
# Use test environment variables
NODE_ENV=test npm test

# With custom test database
MONGODB_URI=mongodb://localhost:27017/books_test npm test
```

### Test Environment Example (.env.test)
```env
PORT=3000
NODE_ENV=test
MONGODB_URI=mongodb://localhost:27017/books_test
JWT_SECRET=test_secret_key
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=1000
```

## Security

- JWT authentication for protected routes
- Password hashing using bcrypt
- Input validation and sanitization
- Rate limiting for API requests
- CORS enabled
- Security headers with Helmet
- Environment variables for sensitive data

## API Rate Limiting

- 100 requests per IP per 15 minutes for public endpoints
- 1000 requests per IP per 15 minutes for authenticated endpoints

## Deployment

The API can be deployed to various platforms:

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

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 