import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "active" : ""}`}
      style={{
        transitionDelay: show ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;