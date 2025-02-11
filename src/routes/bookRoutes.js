const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} = require('../controllers/bookController');

router.route('/')
    .post(protect, createBook)
    .get(getBooks);

router.route('/:id')
    .get(getBookById)
    .put(protect, updateBook)
    .delete(protect, deleteBook);

module.exports = router; 