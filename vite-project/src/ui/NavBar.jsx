/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar({ scrollPosition }) {
  return (
    <div
      className={`nav-container-top ${scrollPosition > 0 ? "scrolled" : " "}`}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div>
        <ul className="nav-links">
          <li className="links">
            <NavLink to="/about">about</NavLink>
          </li>
          <li className="links">
            <NavLink to="/works">works</NavLink>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/163kUt8blVZXuvaPyXCegDIZfSWhidTDk/view?usp=sharing"
          target="_blank"
          className="btn-cv"
          aria-label="Download CV"
        >
          CV
        </a>
      </div>
    </div>
  );
}

export default NavBar;
