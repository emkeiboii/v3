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
          <button className="btn">Download CV</button>
          <button className="btn icon">
            <FaGithub />
          </button>
          <button className="btn icon">
            <FaLinkedin />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
