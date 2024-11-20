const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

//Get all blogs
router.get("/omer", (req,res) => {
    try {
        const blogs = Blog.find();
        res.status(200).json(blogs);
    }
    catch (error){
        res.status(500).json({
            error: error.message
        });
    }
});


module.exports = router;