import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="heading-gradient section-heading">About Me</h2>
      <div className="about-main">
        {/* Image column */}
        <div className="about-img-wrapper">
          <img
            src="/yourphoto.png"
            alt="Amogh B Achar"
            className="about-img"
          />
        </div>
        {/* Content column */}
        <div className="about-content">
          <div className="teamwork">
            <h4 className="about-subtitle">Teamwork & Communication</h4>
            <p className="about-text">
              I'm someone who really enjoys working with a team and believes that clear communication makes everything smoother. During my projects and internship, I've learned how important it is to listen, share ideas openly, and support each other to get things done efficiently. I naturally take initiative when needed—whether that's planning tasks, helping the team stay on track, or stepping up to lead. At the same time, I'm always open to learning from others and adapting to new situations. I try to keep the environment positive, give and take feedback well, and make sure everyone feels comfortable and involved.
            </p>
          </div>
          <div className="education">
            <h4 className="about-subtitle">Education</h4>
            <ul>
              <li>
                <b>School:</b> VSS International Public School, [2009-2019]
              </li>
              <li>
                <b>PU:</b> Sheshadripuram Independent PU College, [2019-2021]
              </li>
              <li>
                <b>Engineering:</b> Global Academy Of Technology, [2021-2025]
              </li>
            </ul>
          </div>
          <div className="hobbies">
            <h4 className="about-subtitle">Hobbies</h4>
            <p>
              I enjoy sketching anime figures, blending creativity with my passion for Japanese animation.
              <br />
              <a
                href="https://www.instagram.com/sktchnimes?igsh=czgweHM0c3VxNWs2"
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
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