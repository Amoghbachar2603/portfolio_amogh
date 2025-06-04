import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Email validation regex
  const validateEmail = (email) => {
    // Simple RFC 5322 compliant regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Auto-hide success/error after 3 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Require name, email, and message
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(true);
      setSuccess(false);
      setEmailError('');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setError(false);
      setSuccess(false);
      return;
    } else {
      setEmailError('');
    }

    setSending(true);

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send(
      'service_g09o86j',    // <-- Replace with your EmailJS service ID
      'template_ymmk4ur',   // <-- Replace with your EmailJS template ID
      templateParams,
      'IGKRvJFo0TXLli3xQ'     // <-- Replace with your EmailJS public key
    )
      .then((response) => {
        setSuccess(true);
        setError(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setSending(false);
      }, (err) => {
        setError(true);
        setSuccess(false);
        setSending(false);
      });
  };

  return (
    <div
      id="contact"
      className="container my-5"
      style={{ paddingTop: "7vw", marginTop: 0, paddingBottom: "7vw" }} // Increased top padding for the whole contact section
    >
      <h2
        className="heading-gradient section-heading"
        style={{ marginTop: 0 }}
      >
        Get In Touch
      </h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div
          className="d-flex flex-wrap gap-3"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5vw",
            marginBottom: "1vw"
          }}
        >
          {/* Three fields in one row */}
          <div className="flex-fill mb-3" style={{ minWidth: "180px", flex: "1 1 0" }}>
            <label htmlFor="name" className="form-label">Name<span style={{color: "red"}}>*</span></label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ color: "#000" }} // Text color set to black
            />
          </div>
          <div className="flex-fill mb-3" style={{ minWidth: "180px", flex: "1 1 0" }}>
            <label htmlFor="email" className="form-label">Email<span style={{color: "red"}}>*</span></label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: "#000" }} // Text color set to black
            />
            {emailError && <div className="text-danger" style={{ fontSize: "0.9rem" }}>{emailError}</div>}
          </div>
          <div className="flex-fill mb-3" style={{ minWidth: "180px", flex: "1 1 0" }}>
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ color: "#000" }} // Text color set to black
            />
          </div>
        </div>
        {/* Message field takes full width */}
        <div className="mb-3" style={{ width: "100%" }}>
          <label htmlFor="message" className="form-label">Message<span style={{color: "red"}}>*</span></label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ color: "#000" }} // Text color set to black
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
      {success && <div className="alert alert-success mt-3">Message sent successfully!</div>}
      {error && <div className="alert alert-danger mt-3">Please fill all required fields.</div>}
      <style>
        {`
          .form-control,
          .form-control:focus,
          .form-control::placeholder {
            color: #000 !important;
            background-color: #fff !important;
          }
          input:-webkit-autofill,
          textarea:-webkit-autofill {
            -webkit-text-fill-color: #000 !important;
            box-shadow: 0 0 0 1000px #fff inset !important;
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;