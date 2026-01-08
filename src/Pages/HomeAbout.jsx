import React, { useRef } from "react";
import "./HomeAbout.css";
import profileImg from "../assets/profile.jpeg";
import Pdfresume from "../assets/resume.pdf";

const HomeAbout = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="section1" id="home">
        <div className="infome">
          <div className="hname">
            <h2 className="profilename">VIDHYA SAGAR</h2>

            <div className="codercont">
              I AM
              <span className="animated-text">
                <span className="animated-text-inner">
                  <span>coder</span>
                  <span>developer</span>
                  <span>programmer</span>
                  <span>student</span>
                  <span>editor</span>
                </span>
              </span>
            </div>

            <button className="aboutbtn" onClick={scrollToAbout}>
              About Us
            </button>

            {/* <div className="welcome">Welcome to my profile</div> */}
          </div>
<div>
          <img
            src="https://imgs.search.brave.com/VisP5C1ecq1zMF2jPnX2Y1SZUum82HEO7dtVN0mzu-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9oYWNrZXIt/dXNpbmctbGFwdG9w/LWhhY2tpbmctaW50/ZXJuZXQtMjYwbnct/NTAzMTUwMTg4Lmpw/Zw"
            className="photome"
            alt="profile"
          />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        className="section2"
        id="about"
        ref={aboutRef}
        tabIndex="-1"
      >
        <h2 className="About">About Us</h2>

        <div className="about-content">

        <img
  src={profileImg}
  className="profile-photo"
  alt="Vidhya Sagar Profile"
/>


          <h3>My Philosophy: Code that matters.</h3>

          <p>
            My name  is <b>VIDHYA SAGAR KUSHWAHA  .</b>  
            I am a passionate Full-Stack Developer with 1 year of experience
            focusing on building clean, efficient, and user-centric web
            applications. My goal is to transform complex problems into elegant,
            scalable software solutions.
          </p>

          <p>
            Currently, I am seeking opportunities where I can utilize my
            expertise in the MERN stack and contribute to meaningful projects.
            When I'm not coding, I enjoy contributing to open source, learning
            new technologies, and reading tech blogs.
          </p>

       
<p style={{ marginTop: "20px" }}>
 <a
  href={Pdfresume}   // ✅ sahi
  download="VidhyaSagar_Resume.pdf"
  className="cta-button"
>
  Download My Resume (PDF)
</a>

</p>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
