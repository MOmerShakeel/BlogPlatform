const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

//Get all blogs
router.get("/", async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get a single blog
  router.get("/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Create a new blog
  router.post("/", async (req, res) => {
    const { title, content } = req.body;
    try {
      const newBlog = await Blog.create({ title, content });
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a blog
  router.put("/:id", async (req, res) => {
    const { title, content } = req.body;
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a blog
  router.delete("/:id", async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;