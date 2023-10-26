const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // it is used to interact with mongoDB server

const app = express(); // create app by calling express function
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch((err) =>{
    console.log(err.message);
});

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
});
