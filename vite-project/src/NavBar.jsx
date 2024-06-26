import Logo from "./Logo";

function NavBar() {
  return (
    <div className="nav-container">
      <a href="">
        <Logo />
      </a>

      <ul className="nav-links">
        <li className="links">
          <a href="">about me</a>
        </li>
        <li className="links">
          <a href="">works</a>
        </li>
        <li className="links">
          <a href="">contact</a>
        </li>
      </ul>
      <button className="btn-navbar">CV</button>
    </div>
  );
}

export default NavBar;
