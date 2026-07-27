import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-logo">
        <img src="/logo.png" alt="Editor Seth Logo" />
      </div>

      <div className="portfolio-header">
        <p className="section-tag">MY WORK</p>

        <h2>
          Videos that capture
          <br />
          attention.
        </h2>

        <p className="section-description">
          A collection of edits created for creators, brands and digital platforms.
        </p>
      </div>

      <div className="portfolio-grid">

        {/* Podcast 1 */}
        <a
          href="https://www.instagram.com/reel/DZXKX8hRt3i/?igsh=YTZhcHVleGhuMDAy"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/podcast-thumbnail.png" alt="Podcast Reel 1" />
            <span>▶</span>
          </div>

          <h3>Podcast Reel 1</h3>
          <p>High retention podcast editing.</p>
        </a>

        {/* Podcast 2 */}
        <a
          href="https://www.instagram.com/reel/Da7dfRCx111/?igsh=eThxODllemxpcTFx"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/podcast-thumbnail-2.png" alt="Podcast Reel 2" />
            <span>▶</span>
          </div>

          <h3>Podcast Reel 2</h3>
          <p>High retention podcast editing.</p>
        </a>

        {/* Podcast 3 */}
        <a
          href="https://www.instagram.com/reel/DbK3Lgdxhe9/?igsh=NHVkbmxkeDY1dGVw"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/podcast-thumbnail-3.png" alt="Podcast Reel 3" />
            <span>▶</span>
          </div>

          <h3>Podcast Reel 3</h3>
          <p>High retention podcast editing.</p>
        </a>

        {/* Real Estate 1 */}
        <a
          href="https://www.instagram.com/reel/DbBUJ22Rcfd/?igsh=MW0ybGQ3M2N4NnBhaA=="
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/realestate-1.png" alt="Real Estate 1" />
            <span>▶</span>
          </div>

          <h3>Real Estate 1</h3>
          <p>Cinematic property videos.</p>
        </a>

        {/* Real Estate 2 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/realestate-2.jpg" alt="Real Estate 2" />
            <span>▶</span>
          </div>

          <h3>Real Estate 2</h3>
          <p>Cinematic property videos.</p>
        </a>

        {/* Real Estate 3 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/realestate-3.jpg" alt="Real Estate 3" />
            <span>▶</span>
          </div>

          <h3>Real Estate 3</h3>
          <p>Cinematic property videos.</p>
        </a>

        {/* AI Video 1 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/ai-video-1.jpg" alt="AI Video 1" />
            <span>▶</span>
          </div>

          <h3>AI Video 1</h3>
          <p>Creative AI visuals with storytelling.</p>
        </a>

        {/* AI Video 2 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/ai-video-2.jpg" alt="AI Video 2" />
            <span>▶</span>
          </div>

          <h3>AI Video 2</h3>
          <p>Creative AI visuals with storytelling.</p>
        </a>

        {/* AI Video 3 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/ai-video-3.jpg" alt="AI Video 3" />
            <span>▶</span>
          </div>

          <h3>AI Video 3</h3>
          <p>Creative AI visuals with storytelling.</p>
        </a>

        {/* Before-After Reel 1 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/before-after-1.png" alt="Before-After Reel 1" />
            <span>▶</span>
          </div>

          <h3>Before-After Reel 1</h3>
          <p>Professional before & after editing.</p>
        </a>

        {/* Before-After Reel 2 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/before-after-2.png" alt="Before-After Reel 2" />
            <span>▶</span>
          </div>

          <h3>Before-After Reel 2</h3>
          <p>Professional before & after editing.</p>
        </a>

        {/* Before-After Reel 3 */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <div className="card-image">
            <img src="/before-after-3.png" alt="Before-After Reel 3" />
            <span>▶</span>
          </div>

          <h3>Before-After Reel 3</h3>
          <p>Professional before & after editing.</p>
        </a>

      </div>

    </section>
  );
}

export default Portfolio;