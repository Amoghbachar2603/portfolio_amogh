import React from 'react';
import {
  SiPython, SiC, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiTensorflow,
  SiMysql, SiMongodb,
  SiPostman, SiGithub,
  SiGit,
  SiFigma,
  SiCanva,
  SiSqlite
} from 'react-icons/si';
import 'animate.css/animate.min.css';

const skillCategories = [
  {
    label: "Languages",
    icons: [
      <SiPython size="3.7vw" color="#3776AB" key="python" />,
      <SiC size="3.5vw" color="#A8B9CC" key="c" />,
      <SiHtml5 size="3.5vw" color="#E34F26" key="html5" />,
      <SiCss3 size="3.5vw" color="#1572B6" key="css3" />,
      <SiJavascript size="3.5vw" color="#F7DF1E" key="js" />,
    ],
  },
  {
    label: "Frameworks",
    icons: [
      <SiReact size="3.7vw" color="#61DAFB" key="react" />,
      <SiBootstrap size="3.5vw" color="#7952B3" key="bootstrap" />,
      <SiNodedotjs size="3.5vw" color="#339933" key="node" />,
      <SiExpress size="3.5vw" color="#000000" key="express" />,
      
      <SiTensorflow size="3.5vw" color="#FF6F00" key="tf" />,
    ],
  },
  {
    label: "Databases",
    icons: [
      <SiMysql size="3.7vw" color="#4479A1" key="mysql" />,
      
      <SiSqlite size="3.5vw" color="#003B57" key="sqlite" />,
      <SiMongodb size="3.5vw" color="#47A248" key="mongodb" />,
    ],
  },
  {
    label: "Techs / Tools",
    icons: [
      <SiPostman size="3.7vw" color="#FF6C37" key="postman" />,
      <SiGithub size="3.5vw" color="#fff" key="github" />,
      <SiGit size="3.5vw" color="#F05032" key="git" />,
      <SiFigma size="3.5vw" color="#F24E1E" key="figma" />,
      
      <SiCanva size="3.5vw" color="#00C4CC" key="canva" />,
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="skills-section my-5 animate__animated animate__fadeInUp"
    style={{
      width: "100vw",
      padding: "4vw 0",
      background: "#181A1B",
      color: "#fff"
    }}
  >
    <div className="container" style={{ maxWidth: "1100px" }}>
      <h2
        className="heading-gradient mb-5"
        style={{
          color: "#1976d2",
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginLeft: 0,
        }}
      >
        Skills
      </h2>
      <div
        className="d-flex flex-wrap justify-content-center align-items-stretch"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          width: "100%",
        }}
      >
        {skillCategories.map((cat, idx) => (
          <div
            key={cat.label}
            className="d-flex flex-column align-items-center justify-content-start"
            style={{
              background: "#23272b",
              borderRadius: "18px",
              padding: "2rem 1.5rem 1.5rem 1.5rem",
              minWidth: "320px", // Increased width
              flex: "1 1 45%",   // Increased width
              maxWidth: "500px", // Increased width
              boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)",
              marginBottom: "0",
            }}
          >
            <h3
              style={{
                color: "#2196f3", // Brighter blue for visibility
                fontWeight: 900,
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                textAlign: "center",
                marginBottom: "1.2rem",
                letterSpacing: "1px",
                textShadow: "0 2px 8px rgba(25,118,210,0.25), 0 1px 0 #000"
              }}
            >
              {cat.label}
            </h3>
            <div
              className="d-flex flex-wrap justify-content-center align-items-center"
              style={{
                gap: "2vw",
                width: "100%",
                marginTop: "0.5rem"
              }}
            >
              {cat.icons.map(icon => (
                <span key={icon.key || Math.random()}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;