import React from "react"

export default function About(){
    return (
        <section className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi, I'm <span className="highlight">Shobhit Sharma</span>, a passionate{" "}
          <span className="highlight">front-end developer</span> with expertise in{" "}
          <span className="highlight">HTML, CSS, JavaScript, React, and Tailwind</span>. 
          I have a strong foundation in building modern, user-friendly web applications and love 
          creating seamless digital experiences.
        </p>
        <h2 className="projects-title">Projects</h2>
        <ul className="projects-list">
          <li className="project-item">
            <span className="project-name">Car Charging Station with a Restaurant</span> – Integrated{" "}
            <span className="project-detail">real-time updates, booking slots, and payment systems</span> to enhance user convenience.
          </li>
          <li className="project-item">
            <span className="project-name">Food Ordering App</span> – Designed an intuitive interface for seamless{" "}
            <span className="project-detail">food selection, ordering, and checkout</span>.
          </li>
          <li className="project-item">
            <span className="project-name">Grid Layout Project</span> – Implemented a fully responsive and accessible{" "}
            <span className="project-detail">CSS Grid layout</span> for a dynamic and structured user experience.
          </li>
        </ul>
        <p className="about-footer">
          I'm also preparing for <span className="highlight">international job opportunities</span> in front-end development. 
          I’m always eager to explore new technologies, especially{" "}
          <span className="highlight">AI-powered innovations</span>, to enhance user experiences and build smarter applications.
        </p>
        <p className="connect-text">Let’s connect and build something amazing together! 🚀</p>
      </section>

    )
}