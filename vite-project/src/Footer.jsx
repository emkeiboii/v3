import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <span>always dream.</span>
      <p>Designed & Built by Mark Lajom</p>
      <div>
        <a href="https://github.com/emkeiboii" className="" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-lajom-008b9b250/"
          className=""
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
