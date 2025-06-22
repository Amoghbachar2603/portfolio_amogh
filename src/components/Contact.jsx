import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

// Consistent section title styling
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.sectionBg};
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 120px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

const Alert = styled.div`
  margin-top: 1rem;
  color: ${({ error, theme }) => (error ? theme.error : theme.success)};
`;

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: "", error: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user_name, user_email, subject, message } = form.current;
    if (
      !user_name.value ||
      !user_email.value ||
      !subject.value ||
      !message.value
    ) {
      setAlert({ msg: "All fields are required.", error: true });
      return;
    }
    if (!validateEmail(user_email.value)) {
      setAlert({ msg: "Invalid email address.", error: true });
      return;
    }
    setLoading(true);
    setAlert({ msg: "", error: false });

    emailjs
      .sendForm(
        "service_g09o86j", // Service ID
        "template_ymmk4ur", // Template ID
        form.current,
        "IGKRvJFo0TXLli3xQ" // Public API key
      )
      .then(
        () => {
          setAlert({ msg: "Message sent successfully!", error: false });
          setLoading(false);
          form.current.reset();
        },
        () => {
          setAlert({ msg: "Failed to send message. Try again.", error: true });
          setLoading(false);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Get In Touch </SectionTitle>
      <Form ref={form} onSubmit={handleSubmit}>
        <Input name="user_name" placeholder="Your Name" required />
        <Input name="user_email" type="email" placeholder="Your Email" required />
        <Input name="subject" placeholder="Subject" required />
        <Textarea name="message" placeholder="Message" required />
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {alert.msg && <Alert error={alert.error}>{alert.msg}</Alert>}
      </Form>
    </ContactSection>
  );
};

export default Contact;