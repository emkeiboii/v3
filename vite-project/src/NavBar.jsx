import Logo from "./Logo";

function NavBar() {
  return (
    <div className="nav-container">
      <a href="#home">
        <Logo />
      </a>

      <ul className="nav-links">
        <li className="links">
          <a href="#about">about me</a>
        </li>
        <li className="links">
          <a href="#works">works</a>
        </li>
        <li className="links">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <button className="btn-navbar">CV</button>
    </div>
  );
}

export default NavBar;
