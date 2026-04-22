import "./App.css";
import profileImg from "./assets/profile.jpg";
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
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "linear-gradient(90deg, #020617, #050816, #0a0f2c)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: "300",
              fontFamily: "cursive",
              color: "white",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
            }}
          >
            Gila_Dasta
          </div>

          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "32px",
                margin: 0,
                padding: 0,
                alignItems: "center",
                fontSize: "15px",
                fontWeight: "600",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <li>
                <a href="#home" style={activeLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={link}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" style={link}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" style={link}>
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" style={link}>
                  Skills & Expertise
                </a>
              </li>
              <li>
                <a href="#projects" style={link}>
                  Key Projects
                </a>
              </li>
              <li>
                <a href="#my-projects" style={link}>
                  My Projects
                </a>
              </li>
              <li>
                <a href="#contact" style={link}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="hero-layout">
          <div className="hero-image-wrap">
            <img src={profileImg} alt="Gila Desta" className="hero-image" />
          </div>

          <div className="hero-text">
            <h1>Gila Dasta</h1>

            <h2>
              DATA<span>–</span> ANALYTICS <span>–</span> DIGITAL INNOVATION
            </h2>

            <p className="hero-description">
              Transforming data into insights and business value. Combining
              analytical thinking, technology, and system understanding to build
              smart, user-focused digital solutions.
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

      <main className="container">
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

        <section className="card" id="experience">
          <h2>Experience</h2>
          <p>
            I have experience in customer service, business processes, and
            working in dynamic environments that require responsibility,
            communication skills, and the ability to learn quickly. Alongside my
            studies, I have developed a strong professional mindset and
            practical understanding of systems, users, and organizational needs.
          </p>
        </section>

        <section className="card" id="education">
          <h2>Education</h2>
          <p>
            B.A. in Information Systems with strong academic performance and a
            growing focus on data, digital solutions, and business analysis.
            Throughout my studies, I have worked on projects involving system
            analysis, SQL, Python, React, and product-oriented thinking.
          </p>
        </section>

        <section className="card" id="skills">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card" id="projects">
          <h2>Key Projects</h2>

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

        <section className="card" id="my-projects">
          <h2>My Projects</h2>
          <p>
            This section can include additional academic, technical, or personal
            projects that reflect my abilities, creativity, and passion for
            building meaningful digital solutions.
          </p>
        </section>

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

const link = {
  color: "#a1a1aa",
  textDecoration: "none",
};

const activeLink = {
  color: "#6366f1",
  textDecoration: "none",
  fontWeight: "700",
};

export default App;
