import React from "react";


export default function Project(){
  console.log("project")
    return(
        <div className="project-page">
        <h1 className="project-title">Food Delivery App</h1>
        <p className="project-description">
          The Food Delivery App allows users to browse restaurants, select dishes, and place orders seamlessly. It features real-time tracking, multiple payment options, and a user-friendly interface optimized for a smooth experience.
          
        <br />
        <a
          href="http://fastfoodordering.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>

        </p>
        <div className="image-grid">
          <img src="/food1.png" alt="Food 1" className="project-image" />
          <img src="/food2.png" alt="Food 2" className="project-image" />
          <img src="/food3.png" alt="Food 3" className="project-image" />
          <img src="/food4.png" alt="Food 4" className="project-image" />
        </div>
      </div>
    )
}