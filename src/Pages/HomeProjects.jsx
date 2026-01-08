import React, { useRef } from "react";
import "./HomeProjects.css"

const projects = [
  {
    title: "E-commerce Product Platform",
    description:
      "A full-stack solution featuring user authentication, Stripe integration, and a dedicated admin dashboard.",
    techStack: "Node.js,react, CSS, MongoDB",
    image: "https://via.placeholder.com/600x400/21262d?text=E-Commerce+App",
    github: "https://github.com/vidhyasagar118/chpromakerfrontend",
    demo: "https://chpromakerfrontend-xw5v.vercel.app/"
  },
  {
  title: "Freshers Voting Site",
  description:   "An online voting platform built to select Mr. and Ms. Freshers, allowing students to securely vote for candidates with real-time result tracking and admin management.",
  techStack: "node js, react,Mongodb altas,express",
  image: "https://via.placeholder.com/600x400/21262d?text=Analytics+Dashboard",
  github: "https://github.com/vidhyasagar118/freshers.com",
  demo: "https://freshers1.vercel.app/"
}
,
  {
    title: "Todo list",
    description:
    "A cross-platform, mobile-first to-do list app that helps users create, manage, and track daily tasks with real-time sync and push notifications on Android and iOS.",
    techStack: "Html ,css ,express js &node js",
    image: "https://via.placeholder.com/600x400/21262d?text=Mobile+Chat+App",
    github: "https://github.com/vidhyasagar/mobile-chat-app",
    demo: "https://demo.vidhyasagar.dev/chat"
  }
,
 {
    title: "Todo list",
    description:
    "A cross-platform, mobile-first to-do list app that helps users create, manage, and track daily tasks with real-time sync and push notifications on Android and iOS.",
    techStack: "Html ,css ,express js &node js",
    image: "https://via.placeholder.com/600x400/21262d?text=Mobile+Chat+App",
    github: "https://github.com/vidhyasagar/mobile-chat-app",
    demo: "https://demo.vidhyasagar.dev/chat"
  }
];

const HomeProjects = () => {
  const projectRef = useRef(null);

  return (
    <section className="section3" id="projects" ref={projectRef} tabIndex="-1">
      <h2 className="prheading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tech Stack: {project.techStack}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code (GitHub)
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
