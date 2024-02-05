const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const db = require('./database/db');
const Blog = require('./model/blog');


const app = express();
app.use(express.json());
dotenv.config()
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

db();



app.get('/', (req, res)=> {
    res.send('Home Page!!!!')
})

app.post('/blog', async (req, res)=> {
    const {author, content, title} = req.body;

    const newBlog = new Blog({
        author,
        content,
        title,
    })
await newBlog.save();

res.send("Blog Created Successfully");
    
})

app.get('/getblog', async (req, res) => {
    const allBlog = await Blog.find()

    res.send(allBlog)
})

app.get('/getblogger', async (req, res) => {
    const title = req.body


    const allBlog = await Blog.find(title)
res.send(allBlog)
})

app.delete('/delete', async (req, res) => {
    const title = req.body;

    const deletedBlog = await Blog.findOneAndDelete(title)

    res.send(deletedBlog)
})

app.listen(port, ()=> {
    console.log(`listening on ${port}`);
})