import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_qpukt2h",
      "template_bczok8l",
      form.current,
      "SZ3K--33UQN71Zi6Z"
    );
    e.target.reset();
    swal({
      title: "Send!",
      text: "Mail send !",
      icon: "success",
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>priscillia.ammeux@gmail.com</h5>
            <a
              href="mailto:priscillia.ammeux@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option" />
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
