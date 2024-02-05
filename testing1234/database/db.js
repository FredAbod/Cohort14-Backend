const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

const db = ()=> {
    try {
 mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected Successfully");
      } catch (error) {
          console.log("Error Connecting To Database: " + error);
      }
      
}



module.exports = db;