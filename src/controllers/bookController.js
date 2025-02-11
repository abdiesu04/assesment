const Book = require('../models/Book');

// @desc    Create a new book
// @route   POST /api/books
// @access  Private
const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400);
        throw new Error('Invalid book data');
    }
};

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500);
        throw new Error('Server Error');
    }
};

// @desc    Get book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404);
            throw new Error('Book not found');
        }
    } catch (error) {
        res.status(404);
        throw new Error('Book not found');
    }
};

// @desc    Update book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        
        if (book) {
            Object.assign(book, req.body);
            const updatedBook = await book.save();
            res.json(updatedBook);
        } else {
            res.status(404);
            throw new Error('Book not found');
        }
    } catch (error) {
        res.status(400);
        throw new Error('Invalid book data');
    }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        
        if (book) {
            await book.deleteOne();
            res.json({ message: 'Book removed' });
        } else {
            res.status(404);
            throw new Error('Book not found');
        }
    } catch (error) {
        res.status(404);
        throw new Error('Book not found');
    }
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}; 