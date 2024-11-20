import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogDetails } from './pages/BlogDetails';
import { BlogForm } from './pages/BlogForm';
import { BlogList } from './pages/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} /> 
        <Route path="/omer" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
