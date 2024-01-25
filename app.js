const express = require('express');
const dotenv = require('dotenv');

dotenv.config();


const app = express();


// Middleware to parse JSON in the request body
app.use(express.json());

const port = process.env.PORT;

// Get Request
app.get('/', (req, res) => {
res.send("Hello Senior Devs!😂😁😀😁");
})

// Post Request
app.post('/post', (req, res) => {
        const {userName, password} = req.body;
    res.send(`Hello ${userName} This is your password${password}`);
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