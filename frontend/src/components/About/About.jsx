import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Completed </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Business</h5>
              <small>XPEHO</small>
            </article>
          </div>
          <p>
            I discovered the IT world by joining an ESN almost 8 years ago.
            That's where I got the taste for it. I had children and my way of
            seeing the work changed, I wanted to do a job that I was passionate
            about, that made me vibrate. While browsing websites with a
            particularly interesting design, I became interested in the
            developer's job. I was curious about how it was created. So I took
            an e-learning course on OpenClassRoom to confirm my choice. This
            training confirmed my passion for code, so I decided to join a
            school, the Wild Code School. I'm still motivated and I'm starting a
            work-study program as an advanced web and mobile developer in March
            2023 at the Wild Code School. Do not hesitate to contact me in order
            to share on code or other🚀.
          </p>

          <a href="#contact" className="btn btn-primary">
            Stay In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
