import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

function Reveal({ children, delay = 0 }) {

  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }

      },
      {
        threshold: 0.05,
        rootMargin: "100px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "active" : ""}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;