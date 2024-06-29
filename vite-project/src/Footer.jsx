import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <span>always dream.</span>
      <p>Designed & Built by Mark Lajom</p>
      <div>
        <a href="" className="">
          <FaGithub />
        </a>
        <a href="" className="">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
