import React from "react";
import "../App.css"; // Ensure styling matches the black theme

const education = [
  {
    degree: "10th Standard CBSE",
    institution: "VSS International Public School",
    year: "2018 – 2019",
    result: "Percentage: 83.6",
  },
  {
    degree: "Pre University State Board",
    institution: "Seshadripuram Pre University College",
    year: "2019 – 2021",
    result: "Percentage: 89.66",
  },
  {
    degree: "BE in Artificial Intelligence & Machine Learning",
    institution: "Global Academy of Technology",
    year: "2021 – 2025",
    result: "CGPA: 9.28",
  },
];

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="result">{edu.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
