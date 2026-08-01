import "./LoadingScreen.css";

function LoadingScreen({ hide }) {
  return (
    <div className={`loading-screen ${hide ? "hide" : ""}`}>

      <div className="loading-content">

        <img
          src="/logo.png"
          alt="Editor Seth"
          className="loading-logo"
        />

        <h1 className="loading-title">
          EDITOR <span>SETH</span>
        </h1>

        <p className="loading-subtitle">
          Professional Video Editor
        </p>

        <div className="loading-ring"></div>

        <div className="loading-line">
          <span></span>
        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;