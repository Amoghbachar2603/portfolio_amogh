# Getting Started with Personal Portfolio

This project is a personal portfolio application built with React.js and styled using Bootstrap. It showcases various sections including a Header, About, Skills, Projects, a Contact Form, and a Footer. The application also features a light/dark theme toggle and smooth scroll behavior.

## Project Structure

The project is organized as follows:

```
personal-portfolio
├── public
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # Metadata for the web application
│   ├── robots.txt          # Controls how search engines index the site
│   └── resume.pdf          # Downloadable resume
├── src
│   ├── components          # Contains all React components
│   │   ├── About.js        # About section component
│   │   ├── ContactForm.js  # Contact form component
│   │   ├── Footer.js       # Footer component
│   │   ├── Header.js       # Header component with navbar
│   │   ├── Navbar.js       # Navigation links and theme toggle
│   │   ├── Projects.js     # Projects section component
│   │   ├── Skills.js       # Skills section component
│   │   └── ThemeToggle.js   # Theme toggle component
│   ├── App.js              # Main application file
│   ├── App.css             # Custom CSS for the application
│   ├── index.js            # Entry point of the React application
│   ├── index.css           # Global styles for the application
│   └── theme.js            # Manages theme settings
├── package.json            # Configuration file for npm
└── README.md               # Documentation for the project
```

## Features

- **Responsive Design**: The application is fully responsive and works well on various screen sizes.
- **Light/Dark Theme Toggle**: Users can switch between light and dark themes for better accessibility.
- **Smooth Scroll Behavior**: The navigation links allow for smooth scrolling to different sections of the page.
- **Downloadable Resume**: A link to download your resume is included in the navbar.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-portfolio
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application in development mode, run:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Deployment

To create a production build, run:
```
npm run build
```
This will generate a `build` folder with the optimized application ready for deployment.

## Acknowledgements

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Bootstrap was used for styling and layout.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.