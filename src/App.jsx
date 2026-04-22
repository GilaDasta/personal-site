import "./App.css";
import profileImg from "./assets/profile.jpg";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Gila_Dasta</div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Skills & Expertise</a>
            </li>
            <li>
              <a href="#">Key Projects</a>
            </li>
            <li>
              <a href="#">My Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <img src={profileImg} alt="profile" />
        </div>

        <div className="hero-right">
          <p className="tag">PERSONAL BRAND</p>

          <h1>Gila Dasta</h1>

          <h2>DATA – ANALYTICS – DIGITAL INNOVATION</h2>

          <p className="description">
            Transforming data into insights and business value. Combining
            analytical thinking, technology, and system understanding to build
            smart, user-focused digital solutions.
          </p>

          <div className="buttons">
            <button className="btn primary">Contact Me</button>
            <button className="btn secondary">View Projects</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
