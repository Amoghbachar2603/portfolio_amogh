import React from "react";
import { motion } from "framer-motion";

const projects = [
	{
		name: "Feedback Mechanism for Public-Speaking using Audio and Video Analysis",
		description: (
			<>
				Designed a public-speaking feedback system using audio and video analysis
				to evaluate body language, voice modulation, and content delivery.
				<br />
				Utilized <b>VGG16</b> for video analysis, <b>Librosa</b> for audio features,
				and <b>LLMs</b> for generating personalized feedback.
				<br />
				<i>Tools Used:</i> Python, VGG16, OpenCV, Librosa, TensorFlow/Keras,
				Hugging Face Transformers, LLMs, Streamlit
			</>
		),
		github: "https://github.com/Amoghbachar2603/Public_Speaking.git",
	},
	{
		name: "Smart Attendance System using Face Recognition",
		description: (
			<>
				Developed a web-based application using HTML, CSS, JavaScript, integrated
				with MongoDB for secure and scalable student data storage.
				<br />
				Integrated <b>FaceNet</b>, a state-of-the-art deep learning algorithm, to
				accurately recognize and verify student identities in real time.
				<br />
				<i>Tools and techs:</i> FaceNet, Python, OpenCV, MongoDB, HTML, CSS,
				JavaScript
			</>
		),
		github: "https://github.com/Amoghbachar2603/intel-rubix.git",
	},
	{
		name: "Image classification for medical diagnosis : Dermatology",
		description: (
			<>
				Developed a medical image classification system for dermatology to
				identify and classify skin conditions (Acne, Eczema).
				<br />
				Used <b>VGG16</b> deep learning CNN architecture for feature extraction
				and classification of dermatological images.
				<br />
				<i>Tools Used:</i> Python, TensorFlow, Keras
			</>
		),
		github: "https://github.com/Amoghbachar2603/CNN-skin-disease-classification-.git",
	},
	// Add more projects here
];

export default function Projects() {
	return (
		<section
			id="projects"
			style={{ background: "#f8fbff", padding: "6vw 0 2rem 0" }}
		>
			<div className="container">
				<h2 className="heading-gradient section-heading">Projects</h2>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "2rem",
						justifyContent: "center",
						alignItems: "stretch",
					}}
				>
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.2 }}
							style={{
								background: "#fff",
								borderRadius: "16px",
								boxShadow: "0 4px 24px rgba(25, 118, 210, 0.08)",
								padding: "2rem",
								maxWidth: "400px",
								minWidth: "300px",
								width: "100%",
								flex: "1 1 340px",
								display: "flex",
								flexDirection: "column",
								alignItems: "stretch",
								height: "480px", // Fixed height for all cards
								boxSizing: "border-box",
								overflow: "hidden", // Prevents content overflow
							}}
						>
							<h3
								style={{
									color: "#0a2342",
									fontWeight: 700,
									marginBottom: "1rem",
									textAlign: "justify", // Justified title
									background: "none",
									WebkitBackgroundClip: "unset",
									WebkitTextFillColor: "unset",
									backgroundClip: "unset",
								}}
							>
								{project.name}
							</h3>
							<div
								style={{
									color: "#222",
									marginBottom: "1.5rem",
									fontWeight: 500,
									fontSize: "1.05rem",
									textAlign: "justify",
									flex: "1 1 100%",
									overflow: "auto",
								}}
							>
								{project.description}
							</div>
							<div style={{
                                marginTop: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-end",
                                width: "100%"
                            }}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#fff",
                                        background: "linear-gradient(90deg, #0a2342 0%, #1976d2 100%)",
                                        padding: "0.5rem 1.5rem",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        transition: "background 0.2s, color 0.2s",
                                        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                                        textAlign: "center",
                                        display: "inline-block"
                                    }}
                                    onMouseOver={e => {
                                        e.target.style.background = "#1565c0";
                                        e.target.style.color = "#fff";
                                    }}
                                    onMouseOut={e => {
                                        e.target.style.background = "linear-gradient(90deg, #0a2342 0%, #1976d2 100%)";
                                        e.target.style.color = "#fff";
                                    }}
                                >
                                    View on GitHub
                                </a>
                            </div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}