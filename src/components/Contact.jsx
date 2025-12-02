import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2'
export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "56c07aac-69a9-499a-8bcd-8152578742b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
  Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
})
  };

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          <p>{result}</p>
        </form>
        <footer className="contact-footer">
          <h2>Get in Touch</h2>
          <div className="social-links">
            <a href="http://in.linkedin.com/in/anuj-kumar-5481b9382" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="icon">🔗</span> LinkedIn
            </a>
            <a href="https://www.instagram.com/anuj_473737?igsh=MTFnMHlnY3JvdHh0NQ==" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="icon">📷</span> Instagram
            </a>
            <a href="https://www.anuj32737@gmail.com" className="social-link">
              <span className="icon">✉️</span>Email: anuj32737@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
