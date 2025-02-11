const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    publishedDate: {
        type: Date,
        required: [true, 'Published date is required']
    },
    numberOfPages: {
        type: Number,
        required: [true, 'Number of pages is required'],
        min: [1, 'Number of pages must be greater than 0']
    }
}, {
    timestamps: true
});

// Add text index for search functionality
bookSchema.index({ title: 'text', author: 'text' });

module.exports = mongoose.model('Book', bookSchema); 