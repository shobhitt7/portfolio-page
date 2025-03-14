import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectLayout from './pages/ProjectLayout';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Project from './pages/Projects';
import Meesho from './pages/meeshoproject';
import ProjectGrid from './pages/Grid';

export default function App() {
  console.log("hello")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        
           <Route path="projects" element={<ProjectLayout />}>
             <Route index element={<Project/>} />
             <Route path="meesho" element={<Meesho/>} />
             <Route path="spacesite" element={<ProjectGrid/>} />
         </Route>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
