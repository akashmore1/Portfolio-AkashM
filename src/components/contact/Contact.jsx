import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:akashkmore1@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill />
            <h4>Linkedin Messenger</h4>
            <h5>Akash More</h5>
            <a href="dummy@gmail.com" target="_blank">
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
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
