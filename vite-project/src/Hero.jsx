import { RxTriangleRight } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="container full hero" id="home">
      <div className="hero-container">
        <span className="intro">Ciao! My name is:</span>
        <h1>Mark Lajom</h1>
        <div className="roles-container">
          <a href="#webDev" className="hero-roles">
            <RxTriangleRight />
            Frontend developer
          </a>
          <a href="#graphDes" className="hero-roles">
            <RxTriangleRight />
            Graphic designer
          </a>
        </div>
        <div className="btn-container">
          <a
            href="/public/MarkLajomResume050824.pdf"
            download="Mark Lajom CV"
            className="btn"
            aria-label="Download CV"
          >
            Download CV
          </a>

          <a
            className="btn icon"
            href="https://github.com/emkeiboii"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="btn icon"
            href="https://www.linkedin.com/in/mark-lajom-008b9b250/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
