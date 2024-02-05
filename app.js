const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
dotenv.config();



mongoose.connect("mongodb://localhost:27017/blog")

const app = express();
app.use(morgan('dev'));

// Middleware to parse JSON in the request body
app.use(express.json());


const port = process.env.PORT || 3000;


// Blog Schema

const blogSchema = new mongoose.Schema({

author: String,
content: String,
title: String

})

const Blog = mongoose.model("Blog", blogSchema);


// Get Request
app.get('/', (req, res) => {
res.send('Home Page')
});

// Post Request
app.post('/post', async (req, res) => {
        const {author, content, title} = req.body;

const newBlog = new Blog({
    author,
    content,
    title
})

await newBlog.save();

res.send("Blog Created Successfully")
})


// Put Request
app.put('/put', (req, res) => {
    res.send('This is a put request oooooooo');
});

app.delete('/delete', (req, res) => {
    res.send('This is a delete request');
});

app.listen(port, ()=> {
    console.log(`Server is listening on http://localhost:${port}`);
})