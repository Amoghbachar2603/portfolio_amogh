import React from 'react';
import './About.css';

const About = () => {
  return (
    <section
      id="about"
      className="about-section d-flex flex-column align-items-center justify-content-center position-relative"
      style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* About Me heading centered */}
      <h2 className="heading-gradient section-heading">About Me</h2>
      <div
        className="about-main d-flex flex-column flex-md-row align-items-stretch justify-content-between"
        style={{ width: "100%", gap: "3vw" }}
      >
        {/* Image column */}
        <div
          className="about-img-wrapper d-flex align-items-center justify-content-center"
          style={{
            background: "#111",
            borderRadius: "24px",
            padding: 0,
            flex: 1,
            minWidth: 0
          }}
        >
          <img
            src="/yourphoto.png"
            alt="Amogh B Achar"
            className="about-img"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
              background: "#111",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
              display: "block",
              border: "none",
              margin: "0 auto"
            }}
          />
        </div>
        {/* Content column */}
        <div
          className="about-content d-flex flex-column justify-content-center"
          style={{
            flex: 1,
            minWidth: 0,
            height: "100%",
            textAlign: "justify"
          }}
        >
          <h4 className=" education mt-4" style={{ color: "#1976d2" }}>Teamwork & Communication</h4>
          <p style={{ color: "#64FFDA", fontSize: "1.1rem" }}>
            I'm someone who really enjoys working with a team and believes that clear communication makes everything smoother. During my projects and internship, I’ve learned how important it is to listen, share ideas openly, and support each other to get things done efficiently. I naturally take initiative when needed—whether that’s planning tasks, helping the team stay on track, or stepping up to lead. At the same time, I’m always open to learning from others and adapting to new situations. I try to keep the environment positive, give and take feedback well, and make sure everyone feels comfortable and involved.
          </p>
          <div className="education mt-4">
            <h4 style={{ color: "#1976d2" }}>Education</h4>
            <ul>
              <li>
                <b>School:</b> VSS International Public School, [2009-2019]
              </li>
              <li>
                <b>PU:</b> Sheshadripuram Independent Pre-University College, [2019-2021]
              </li>
              <li>
                <b>Engineering:</b> Global Academy Of Technology, [2021-2025]
              </li>
            </ul>
          </div>
          <div className="hobbies mt-4">
            <h4 style={{ color: "#1976d2" }}>Hobbies</h4>
            <p>
              I enjoy sketching anime figures, blending creativity with my passion for Japanese animation.
              <br />
              <a
                href="https://www.instagram.com/sktchnimes?igsh=czgweHM0c3VxNWs2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#64FFDA", textDecoration: "underline" }}
              >
                View my sketches on Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;