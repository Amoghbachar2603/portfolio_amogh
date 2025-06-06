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
import './Skills.css';
import 'animate.css/animate.min.css';

const skillCategories = [
  {
    label: "Languages",
    icons: [
      { Icon: SiPython, color: "#3776AB", key: "python" },
      { Icon: SiC, color: "#A8B9CC", key: "c" },
      { Icon: SiHtml5, color: "#E34F26", key: "html5" },
      { Icon: SiCss3, color: "#1572B6", key: "css3" },
      { Icon: SiJavascript, color: "#F7DF1E", key: "js" },
    ],
  },
  {
    label: "Frameworks",
    icons: [
      { Icon: SiReact, color: "#61DAFB", key: "react" },
      { Icon: SiBootstrap, color: "#7952B3", key: "bootstrap" },
      { Icon: SiNodedotjs, color: "#339933", key: "node" },
      { Icon: SiExpress, color: "#000000", key: "express" },
      { Icon: SiTensorflow, color: "#FF6F00", key: "tf" },
    ],
  },
  {
    label: "Databases",
    icons: [
      { Icon: SiMysql, color: "#4479A1", key: "mysql" },
      { Icon: SiSqlite, color: "#003B57", key: "sqlite" },
      { Icon: SiMongodb, color: "#47A248", key: "mongodb" },
    ],
  },
  {
    label: "Techs / Tools",
    icons: [
      { Icon: SiPostman, color: "#FF6C37", key: "postman" },
      { Icon: SiGithub, color: "#fff", key: "github" },
      { Icon: SiGit, color: "#F05032", key: "git" },
      { Icon: SiFigma, color: "#F24E1E", key: "figma" },
      { Icon: SiCanva, color: "#00C4CC", key: "canva" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="skill-category">
            <h3 className="category-heading">{cat.label}</h3>
            <div className="icons-grid">
              {cat.icons.map(({ Icon, color, key }) => (
                <div key={key} className="icon-wrapper">
                  <Icon className="skill-icon" style={{ color }} />
                  <div className="icon-tooltip">{key}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;