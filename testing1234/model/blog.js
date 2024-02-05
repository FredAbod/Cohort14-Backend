const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;