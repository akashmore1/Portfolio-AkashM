import React, { useContext } from "react";

import { MouseContext } from "../../features/MouseContext";

import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";

import "./Contact.css";

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <section id="contact" className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>akashkmore1@gmail.com</h5>
            <a
              href="mailto:akashkmore1@gmail.com"
              target="_blank"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill className="contact_option-icon" />
            <h4>Linkedin Messenger</h4>
            <h5>Akash More</h5>
            <a
              href="https://www.linkedin.com/in/akash-k-more44/"
              target="_blank"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of options */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
