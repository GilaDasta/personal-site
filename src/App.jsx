import "./App.css";
import profileImg from "./assets/profile.jpg";

function App() {
  const skills = [
    "SQL & Databases",
    "Python (Pandas, Data Analysis)",
    "React & JavaScript",
    "Data Analysis & Visualization",
    "System Analysis & UML",
    "Product Thinking",
    "Business & Process Analysis",
    "Problem Solving",
  ];

  return (
    <div className="app" dir="ltr">
      {/* Top Navigation */}
      <header className="topbar">
        <div className="logo">Gila Desta</div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="hero-layout">
          <div className="hero-image-wrap">
            <img src={profileImg} alt="Gila Desta" className="hero-image" />
          </div>

          <div className="hero-text">
            <p className="hero-mini">PERSONAL BRAND</p>

            <h1>Gila Desta</h1>

            <h2>
              Information Systems <span>–</span> Data <span>–</span> Digital
              Innovation
            </h2>

            <p className="hero-description">
              Outstanding Information Systems student with a strong foundation
              in data analysis, web development, and business processes.
              Passionate about transforming data into insights and building
              smart, user-centered digital solutions.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container">
        {/* About */}
        <section className="card" id="about">
          <h2>About Me</h2>
          <p>
            I am an Information Systems student with a strong academic
            background and hands-on experience in data analysis, system design,
            and digital product thinking. I combine analytical thinking,
            creativity, and a deep motivation to learn and grow. My goal is to
            build a career where I can turn complex data and business challenges
            into meaningful and impactful solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="card" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="card" id="projects">
          <h2>Selected Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>CareWell – Clinic Management System</h3>
              <p>
                Led the end-to-end analysis and design of a clinic management
                system. Defined requirements, designed system architecture,
                created UML diagrams and ERD, and built a structured SQL
                database concept. Focused on improving efficiency and
                centralizing data.
              </p>
            </div>

            <div className="project-card">
              <h3>Digital Customer Portal – Maccabi Healthcare</h3>
              <p>
                Analyzed service processes and defined requirements for a
                digital customer portal. Designed system architecture, conducted
                risk and cost analysis (TCO), and aligned the solution with
                healthcare regulations.
              </p>
            </div>

            <div className="project-card">
              <h3>Python Data Analysis Project</h3>
              <p>
                Performed end-to-end data analysis using Python (Pandas).
                Cleaned and analyzed datasets, identified trends and
                correlations, and created visualizations to generate actionable
                insights.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <h2>Contact</h2>

          <p>
            <a href="mailto:gila1231230@gmail.com">Email</a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
