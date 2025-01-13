const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();

app.use(cors());  // middleware
app.use(express.json());

// stich the routes to the server
app.use("/api/auth", userRoutes);

// connect the mongoDB using mongoosehttp://localhost:5000
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser : true,             // in current version of of these two statement are not required
    // useUnifiedTopology : true
})
.then(()=>{
    console.log("DB Connection Successfully");
}).catch((err)=>{
    console.log(err.message);
})


// created the server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
})