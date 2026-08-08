import "./LoadingScreen.css";

function LoadingScreen({ hide }) {
  const name = "SIDDHARTH SONI";

  return (
    <div className={`loading-screen ${hide ? "hide" : ""}`}>
      <div className="loading-content">

        <img
          src="/logo.png"
          alt="Editor Seth"
          className="loading-logo"
        />

        <h1 className="loading-name">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={letter === " " ? "name-space" : ""}
              style={{ animationDelay: `${0.45 + index * 0.08}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

      </div>
    </div>
  );
}

export default LoadingScreen;