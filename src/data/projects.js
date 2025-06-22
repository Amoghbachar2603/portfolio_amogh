// Place images in src/assets/
export default [
  {
    title: "Feedback Mechanism for Public-Speaking",
    description: "Designed a comprehensive public-speaking feedback system that analyzes multiple aspects of speech delivery including words per minute, pace, fluency, and silent time intervals. Utilized YOLOv8 pose detection model, trained on a custom dataset for accurate body language analysis, Librosa for audio feature extraction, and integrated HuggingFace's Inference API for generating personalized, constructive feedback. The system provides real-time analysis through a clean, intuitive web interface built with HTML and CSS, helping speakers improve their presentation skills through detailed performance metrics.",
    tech: ["Python", "YOLOv8", "OpenCV", "Librosa", "TensorFlow", "Hugging Face", "LLMs", "Streamlit"],
    image: "/project1.png",
    code: "#"
  },
  {
    title: "RUBIX - Secure Whistleblowing Platform",
    description: "Developed RUBIX, a secure and anonymous platform for reporting workplace incidents. Features include 100% anonymous reporting with state-of-the-art encryption, real-time updates for report tracking, and a verified process handled by trained professionals. The platform includes a user-friendly interface for both reporters and administrators, with features like secure report submission, progress tracking, and an admin dashboard. Implemented custom encryption and security measures, along with Gemini AI integration for report analysis.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Gemini AI"],
    image: "https://via.placeholder.com/320x180?text=RUBIX+Platform",
    code: "https://github.com/Amoghbachar2603/WhistelBlowing_application"
  },
  {
    title: "Smart Attendance System",
    description: "Developed a comprehensive attendance management system that combines facial recognition technology with a responsive web interface. The system utilizes FaceNet for real-time face detection and recognition, capable of handling multiple faces simultaneously and adapting to various lighting conditions. Features include automated attendance marking, real-time status updates, and a secure MongoDB database for student information storage. The web interface, built with HTML, CSS, and JavaScript, provides intuitive navigation for both students and administrators, with features like attendance history, statistical reports, and export functionality. Implemented secure authentication and data encryption to ensure student privacy and data protection.",
    tech: ["FaceNet", "Python", "OpenCV", "MongoDB", "HTML", "CSS", "JavaScript"],
    image: "https://via.placeholder.com/320x180?text=Attendance+System",
    code: "#"
  }
]; 