import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for links
import "../App.css"; // Using global styles

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Your Name",
    };

    emailjs
      .send(
        "service_g09o86j",
        "template_ymmk4ur",
        templateParams,
        "IGKRvJFo0TXLli3xQ"
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setFormData({ name: "", email: "" });
        },
        () => {
          setMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to connect with me!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      
      {message && <p className="form-message">{message}</p>}

      <div className="social-links">
        <a href="https://www.linkedin.com/in/amogh-b-achar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Amoghbachar2603" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
