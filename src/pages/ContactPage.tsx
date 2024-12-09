import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>
        If you'd like to work together or have any questions, feel free to reach
        out!
      </p>
      <div className="contact-info">
        <p>
          Email: <a href="mailto:dongil@example.com">dongil@example.com</a>
        </p>
        <p>Phone: +1 234-567-8901</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/dongil-kwon"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/dongil-kwon
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
