import "./Section5.css";
import Pdfresume from "../assets/resume.pdf";

const Section5 = () => {
  return (
    <section id="contact" className="section5">
      <h2 className="section5-heading">other & social media   & Contact</h2>

      <div className="about-info">
        <p>
          I am an <span className="highlight">Undergraduate Student</span> at{" "}
          <span className="highlight">
            Mahatma Gandhi Central University, Motihari, Bihar
          </span>.
        </p>

        <p>
          I am from <span className="highlight">Chittorgarh, Rajasthan</span> 
          and I am pursuing <span className="highlight">B.Tech in Computer Science</span>.
        </p>

        <p>
          I love <span className="highlight">online games</span> and learning new technologies.
        </p>

        <p>
          I have earned some certifications:{" "}
          <span className="cert-link">
            <a href="https://example.com/certificate1" target="_blank" rel="noreferrer">Web Development</a>
          </span>,{" "}
          <span className="cert-link">
            <a href="https://example.com/certificate2" target="_blank" rel="noreferrer">App Development</a>
          </span>
        </p>
      </div>

      <div className="contact-details">
      <a
        href={Pdfresume}   // ✅ sahi
        download="VidhyaSagar_Resume.pdf"
        className="cta-button"
      >
        Download My Resume (PDF)
      </a>
      

        <p>Email: <span className="highlight">abhishekhkushwah.118@gmail.com</span></p>
        <p>Phone: <span className="highlight">6367697913</span></p>
      </div>
    </section>
  );
};

export default Section5;
