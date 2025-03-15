import React from "react";

export default function Meesho() {
  return (
    <div className="project-page">
      <h2 className="project-title">Meesho Clone</h2>
      <p className="project-description">
      The Meesho Clone is a frontend-focused project designed using HTML, CSS, and minimal JavaScript to replicate the look and feel of the Meesho e-commerce platform.
        <br />
        <a href="http://meeshoclone14.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
  Live Demo (Desktop Only)
</a>

      </p>
      <div className="image-grid">
        <img src="/meesho1.png" alt="Meesho Clone 1" className="project-image" />
        <img src="/meesho2.png" alt="Meesho Clone 2" className="project-image" />
        <img src="/meesho3.png" alt="Meesho Clone 3" className="project-image" />
        <img src="/meesho4.png" alt="Meesho Clone 4" className="project-image" />
      </div>
    </div>
  );
}
