const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

// config dot env file 
dotenv.config()

// database call
connectDb();

//rest object 
const app = express()

// middleware 
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// routes 
// user routes 
app.use('/api/v1/users', require('./routes/userRoute'));

// // transaction routes 
app.use('/api/v1/transactions', require('./routes/transactionRoute'));


// port
const PORT = 3001 || process.env.PORT

// listen server
app.listen(PORT,() =>{
    console.log(`Server is running on port number http://localhost:${PORT}`);
})