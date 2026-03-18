const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Blog = require('./models/blog');

const userRoutes = require("./router/user");
const blogRoutes = require("./router/blog")
const { checkForAuthenticationCookie } = require('./middleware/authentication');

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/blogify").then((e) => console.log("MongoDB connected!!"))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve("./public")))
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))

app.get('/', async(req, res) => {
    const allBlog = await Blog.find({})
    res.render("home", {
        user: req.user,
        blogs: allBlog
    });
})

app.use("/user", userRoutes)
app.use("/blog", blogRoutes);

app.listen(PORT, (req, res) => {
    console.log("Server Started!!");
    console.log(`http://localhost:${PORT}/`);
    
    
})