import { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const sectionRef = useRef(null);
  let lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (window.scrollY < lastScrollY.current) {
        sectionRef.current.classList.add("scroll-up");
        sectionRef.current.classList.remove("scroll-down");
      } else {
        sectionRef.current.classList.add("scroll-down");
        sectionRef.current.classList.remove("scroll-up");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git & GitHub"
  ];

  return (
    <section id="skills" ref={sectionRef} className="section4">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <span key={i} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
