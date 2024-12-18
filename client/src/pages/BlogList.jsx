import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:5000/api/blogs")
        .then((response) => setBlogs(response.data))
        .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            <h1>New Blog Platform</h1>
            <p>This is a new blog platform for testing.</p>
            <p>Nothing is true, everything is permitted.</p>
            <p>To be or not to be, THAT is the question.</p>
            <ul>    
                {blogs.map((blog) => (
                    <li key={blog._id}> 
                        <Link to={`/blog/${blog._id}`}></Link>
                    </li>
                ))}
            </ul>
        </div>
    );

};
