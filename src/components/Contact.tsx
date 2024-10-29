import React from "react";
import "../styles/ContactMe.scss";

function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <h2 className="contact-title">Contact</h2>
      <hr className="contact-separator" />
      <div className="contact-container">
        <div className="contact-email">
          <span>E-MAIL</span>
          <a href="mailto:ambrosioroberto3@gmail.com">
            ambrosioroberto3@gmail.com
          </a>
        </div>
        <div className="contact-social">
          <span>Social Media</span>
          <div className="contact-social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
