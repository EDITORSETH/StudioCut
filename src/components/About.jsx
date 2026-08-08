import "./About.css";

function About() {
  return (
    <section className="about-section">

      {/* Main About */}
      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <div className="about-image">
            <img src="/logo.png" alt="Editor Seth" />
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">

          <p className="section-tag">ABOUT ME</p>

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
            <span>Storytelling</span>
            <span>High Retention</span>
            <span>Cinematic Editing</span>
            <span>Short Form Content</span>
            <span>AI Workflow</span>
          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="about-stats">

        <div className="stat-card">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h3>2+</h3>
          <p>Years experienced</p>
        </div>

      </div>

      {/* Certificate */}
      <div className="certificate-section">

        <p className="section-tag">CERTIFICATION</p>

       <div className="certificate-heading">
  <div className="certificate-title">
    Certificated Editor
  </div>

  <p className="certificate-provider">
    Provided by Dahana Media Works Bhopal LLP
  </p>
</div>

        <div className="certificate-card">

          <div className="certificate-image">
            <img
              src="/certificate.png"
              alt="Video Editing Internship Certificate"
            />
          </div>

        </div>

      </div>

      {/* Tools */}
      <div className="certificate-section">

        <p className="section-tag">TOOLS I USE</p>

        <div className="skills tools-list">
          <span>Adobe Premiere Pro</span>
          <span>CapCut Pro</span>
          <span>Canva</span>
          <span>Adobe Express</span>
          <span>Audacity</span>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="why-us">

        <p className="section-tag">WHY CHOOSE US</p>

        <h2>Why Clients Choose Us</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>⚡ High Retention Editing</h3>
            <p>Edits designed to keep viewers watching till the end.</p>
          </div>

          <div className="why-card">
            <h3>🎬 Cinematic Storytelling</h3>
            <p>Every cut, transition and sound is crafted with purpose.</p>
          </div>

          <div className="why-card">
            <h3>🚀 Fast Turnaround</h3>
            <p>Quick delivery without compromising quality.</p>
          </div>

          <div className="why-card">
            <h3>🤝 Clear Communication</h3>
            <p>Regular updates and smooth collaboration throughout.</p>
          </div>

          <div className="why-card">
            <h3>🔁 Revision Friendly</h3>
            <p>Your feedback matters until you're satisfied.</p>
          </div>

          <div className="why-card">
            <h3>💼 Professional Workflow</h3>
            <p>Reliable process, clear communication and professional delivery.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;