import "./Hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">

            <img
              src="/logo.png"
              alt="Editor Seth Logo"
            />

            AVAILABLE FOR FULL-TIME EDITOR

          </div>

          <p className="hero-tag">
            VIDEO EDITOR
          </p>

          <h1>
            Edits that make
            <br />
            people stop
            <br />
            scrolling.
          </h1>

          <p className="hero-description">
            I create cinematic, emotional and high-retention videos that help
            creators and brands get more attention.
          </p>

        </div>

        <div className="hero-preview">

          <div className="preview-card">

            <div className="preview-top">

              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>

            </div>

            <div className="preview-screen">

              <div className="preview-play">
                ▶
              </div>

            </div>

            <div className="timeline">

              <div className="timeline-fill"></div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;