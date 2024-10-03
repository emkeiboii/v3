import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Hero() {
  return (
    <div className="container full hero" id="home">
      <div className="hero-container">
        <span className="intro">Ciao! My name is</span>
        <h1>Mark Lajom</h1>
        <p>
          I studied graphic design in school and taught myself front-end
          development.
          <br /> Now, I bring the best of both worlds together as a{" "}
          <span className="curr-role">Web Designer.</span>
        </p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/163kUt8blVZXuvaPyXCegDIZfSWhidTDk/view?usp=sharing"
            target="_blank"
            className="btn-cv lg"
            aria-label="Download CV"
          >
            Download CV
          </a>

          <a
            className="btn icon"
            href="https://www.linkedin.com/in/mark-lajom-008b9b250/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a className="btn icon" href="mailto:marklajom.work@email.com">
            <MdMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
