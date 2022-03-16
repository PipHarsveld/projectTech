require("dotenv").config();

const mongoose = require('mongoose');
const url = process.env.MONGO_URI;

const connectDB = () => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB is connected')
    } catch (error) {
        console.log('error')
    }
}

module.exports = connectDB;


