import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* Left Side */}

        <div className="about-left">
          <div className="about-image">
            <img src="/logo.png" alt="Editor Seth" />
          </div>
        </div>

        {/* Right Side */}

        <div className="about-right">

          <p className="section-tag">ABOUT ME TEST</p>

          <h2>
            Hi, I'm <span>Editor Seth</span>
          </h2>

          <h3>Professional Video Editor from India 🇮🇳</h3>

          <p className="about-text">
            I help creators, businesses and brands create videos that grab
            attention, increase watch time and keep viewers engaged. My focus
            is on cinematic editing, storytelling and high-retention content.
          </p>

          <div className="skills">
            <span>Premiere Pro</span>
            <span>Adobe Express</span>
            <span>Canva</span>
            <span>CapCut Pro</span>
            <span>AI Tools</span>
          </div>

        </div>

      </div>


      {/* Stats */}

      <div className="about-stats">

        <div className="stat-card">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h3>5M+</h3>
          <p>Views Generated</p>
        </div>

        <div className="stat-card">
          <h3>5+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Learning</p>
        </div>

      </div>


      {/* Certificate */}

      <div className="certificate-section">

        <p className="section-tag">CERTIFICATION</p>

        <div className="certificate-title">
          Certified Video Editor
        </div>

        <div className="certificate-card">

          <div className="certificate-image">
            {/* Later add your certificate image here */}
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;