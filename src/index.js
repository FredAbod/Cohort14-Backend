const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./database/db');
dotenv.config();
const studentsRouter = require('./routes/students.routes')


const app = express();
app.use(morgan('dev'));

// Middleware to parse JSON in the request body
app.use(express.json());
const port = process.env.PORT || 4500


app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.use('/api/students', studentsRouter)



app.listen(port, async ()=> {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Database connection established");
        console.log(`Server is listening on http://localhost:${port}`);
    } catch (error) {
        console.log("Error connecting to MongoDB: " + error.message);
    }
    
})