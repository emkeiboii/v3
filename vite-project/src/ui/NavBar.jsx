/* eslint-disable react/prop-types */
import Logo from "./Logo";

function NavBar({ scrollPosition }) {
  return (
    <div
      className={`nav-container-top ${scrollPosition > 0 ? "scrolled" : " "}`}
    >
      <a href="#home">
        <Logo />
      </a>

      <ul className="nav-links">
        <li className="links">
          <a href="#about">about</a>
        </li>
        <li className="links">
          <a href="#works">works</a>
        </li>
        <li className="links">
          <a href="#contact">contact</a>
        </li>
      </ul>

      <a
        href="/public/MarkLajomResume050824.pdf"
        download="Mark Lajom CV"
        className="btn-navbar"
        aria-label="Download CV"
      >
        CV
      </a>
    </div>
  );
}

export default NavBar;
