import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import Reveal from "./Reveal";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Podcast Reel");
  const [activeShort, setActiveShort] = useState(0);

  const carouselRef = useRef(null);

  const categories = [
    "Podcast Reel",
    "Real Estate",
    "Long Video",
    "Before / After",
    "Podcast",
  ];

  const projects = [
    {
      category: "Podcast Reel",
      image: "/podcast-thumbnail.webp",
      title: "Podcast Reel 1",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/_mid_life_chaos_/reel/DZXKX8hRt3i/",
    },
    {
      category: "Podcast Reel",
      image: "/podcast-thumbnail-2.webp",
      title: "Podcast Reel 2",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/reel/Da7dfRCx111/",
    },
    {
      category: "Podcast Reel",
      image: "/podcast-thumbnail-3.webp",
      title: "Podcast Reel 3",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/reel/DbK3Lgdxhe9/",
    },

    {
      category: "Real Estate",
      image: "/realestate-1.webp",
      title: "Real Estate 1",
      desc: "Cinematic property videos.",
      link: "https://www.instagram.com/reel/DbBUJ22Rcfd/",
    },
    {
      category: "Real Estate",
      image: "/realestate-2.webp",
      title: "Real Estate 2",
      desc: "Cinematic property videos.",
      link: "https://www.instagram.com/paintals_realty/reel/Dcbz_RasvUU/",
    },
    {
      category: "Real Estate",
      image: "/realestate-3.webp",
      title: "Real Estate 3",
      desc: "Cinematic property videos.",
      link: "https://www.instagram.com/paintals_realty/reel/Dbr91u-B3wU/",
    },

    {
      category: "Long Video",
      image: "/longvideo-1.webp",
      title: "Long Video 1",
      desc: "Long-form YouTube video editing.",
      link: "https://youtu.be/tjcLBkWN7MU",
    },

    {
      category: "Long Video",
      image: "/longvideo-2.webp",
      title: "Long Video 2",
      desc: "Long-form YouTube video editing.",
      link: "https://youtu.be/tblCP3wtqkY?si=vcHceqEHl7uq0fRc",
    },
    {
      category: "AI Videos",
      image: "/ai-video-3.webp",
      title: "AI Video 3",
      desc: "Creative AI visuals with storytelling.",
      link: "https://youtu.be/tjcLBkWN7MU?si=UsJ8ekFR-M8ux3Rh",
    },

    {
      category: "Before / After",
      image: "/before-after-1.webp",
      title: "Before After Reel 1",
      desc: "Professional before & after editing.",
      link: "https://www.instagram.com/reel/Dba4yT7JDBt/",
    },
    {
      category: "Before / After",
      image: "/before-after-2.webp",
      title: "Before After Reel 2",
      desc: "Professional before & after editing.",
      link: "https://www.instagram.com/editor_seth.17/reel/DcNxHccxhTu/",
    },
    {
      category: "Before / After",
      image: "/before-after-3.webp",
      title: "Before After Reel 3",
      desc: "Professional before & after editing.",
      link: "https://www.instagram.com/editor_seth.17/reel/DcGW6wDJbeP/",
    },

    {
      category: "Podcast",
      image: "/long-video-1.webp",
      title: "Podcast Episode",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/RIfAu4c3o8s",
    },
    {
      category: "Podcast",
      image: "/long-video-2.webp",
      title: "Podcast Episode 2",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/VxBg_1ofYbY",
    },
    {
      category: "Podcast",
      image: "/long-video-3.webp",
      title: "Podcast Episode 3",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/jKQMMRHFnJg",
    },
  ];

  const filteredProjects = projects.filter(
    (item) => item.category === activeCategory
  );

  const isShortsCategory =
    filteredProjects.length > 0 &&
    filteredProjects.every(
      (project) =>
        project.category !== "Long Video" &&
        project.category !== "Podcast"
    );

  useEffect(() => {
    setActiveShort(0);

    if (!isShortsCategory || !carouselRef.current) return;

    const carousel = carouselRef.current;

    const updateActive = () => {
      const items = carousel.querySelectorAll(".short-item");

      if (!items.length) return;

      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(carouselCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveShort(closestIndex);
    };

    requestAnimationFrame(updateActive);

    carousel.addEventListener("scroll", updateActive, {
      passive: true,
    });

    window.addEventListener("resize", updateActive);

    return () => {
      carousel.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [activeCategory, isShortsCategory]);

  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-header">
        <span className="section-tag">PORTFOLIO</span>

        <h2>Work That Speaks</h2>

        <p className="section-description">
          A selection of edits crafted for retention, storytelling and impact.
        </p>
      </div>

      <div className="portfolio-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        ref={isShortsCategory ? carouselRef : null}
        className={
          isShortsCategory
            ? "portfolio-grid shorts-track"
            : "portfolio-grid"
        }
      >

        {filteredProjects.map((project, index) => {
  const isLongVideo = project.category === "Long Video";
  const isPodcast = project.category === "Podcast";

  return (
    <div
      key={index}
      className={
        isShortsCategory
          ? `short-item ${
              activeShort === index ? "active-short-item" : ""
            }`
          : `portfolio-item-wrapper ${
              isLongVideo
                ? "long-video-wrapper"
                : isPodcast
                ? "podcast-wrapper"
                : "vertical-wrapper"
            }`
      }
    >
      <Reveal delay={index * 0.08}>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={
            isLongVideo
              ? "portfolio-card long-video-card"
              : isPodcast
              ? "portfolio-card podcast-card"
              : "portfolio-card vertical-card"
          }
        >

          <img
            src={project.image}
            alt={project.title}
            decoding="async"
          />
<div className="reel-play-button">▶</div>
          <h3>{project.title}</h3>

          <p>{project.desc}</p>

        </a>

      </Reveal>
    </div>
  );
})}

        {isShortsCategory && (
          <>
            <span className="short-arrow short-arrow-left">‹</span>
            <span className="short-arrow short-arrow-right">›</span>
          </>
        )}

      </div>

      {isShortsCategory && (
        <div className="slide-hint">
          <span>←</span>
          <span>Slide Left & Right</span>
          <span>→</span>
        </div>
)}

    </section>
  );
}

export default Portfolio;