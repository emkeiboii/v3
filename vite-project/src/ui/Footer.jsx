import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <span>dream.</span>
      <p>Designed & Built by Mark Lajom</p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/mark-lajom-008b9b250/"
          target="_blank"
        >
          <FaLinkedin fontSize={"1.9em"} />
        </a>
        <a href="mailto:marklajom.work@email.com">
          <MdMail fontSize={"2em"} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
