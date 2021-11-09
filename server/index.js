const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const helmet = require('helmet');
const morgan = require('morgan');


app.use(express.json());

// Routers
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const postRouter = require("./routes/posts");

app.get("/", (req, res)=>{
    res.send("Social Media App");
});

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Middleware

app.use(helmet());
app.use(morgan("common"));

const port = process.env.PORT || 8800;
const connectDB = async url => {
    try {
        
        await mongoose.connect(url);
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

connectDB(process.env.MONGO_URI);
app.listen(port, () => {
    console.log(`Server started listening on http://localhost:${port}/`);
});