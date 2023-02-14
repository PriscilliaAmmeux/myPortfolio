import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* <a href="#" className="footer_logo">
        Romain
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Certifications</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://github.com/PriscilliaAmmeux">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/priscillia-ammeux/">
          <BsLinkedin />
        </a>
      </div>
      <div className=".footer_copyright">
        <small>&copy; Priscillia AMMEUX. All rights reserved.</small>
      </div>
    </footer>
  );
}
