import React from "react";

export default function ProjectGrid() {
  return (
    <div className="project-page">
      <h2 className="project-title">Grid Space Site</h2>
      <p className="project-description">
      "Explore a sleek and responsive grid-based layout designed to showcase my expertise in CSS Grid. This space-themed site demonstrates clean structure, seamless alignment, and adaptive responsiveness, ensuring an intuitive and visually appealing user experience across all devices."
        <br />
        <a
          href="http://space-site-using-grid-layout.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
      </p>
      <div className="image-grid">
        <img src="/grid1.png" alt="Meesho Clone 1" className="project-image" />
        <img src="/grid2.png" alt="Meesho Clone 2" className="project-image" />
        <img src="/grid3.png" alt="Meesho Clone 3" className="project-image" />
        <img src="/grid4.jpg" alt="Meesho Clone 4" className="project-image" />
      </div>
    </div>
  );
}
