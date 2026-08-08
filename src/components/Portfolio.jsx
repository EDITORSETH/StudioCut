import { useState } from "react";
import "./Portfolio.css";
import Reveal from "./Reveal";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Podcast Reel");

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
      image: "/podcast-thumbnail.png",
      title: "Podcast Reel 1",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/reel/DZXKX8hRt3i/",
    },

    {
      category: "Podcast Reel",
      image: "/podcast-thumbnail-2.png",
      title: "Podcast Reel 2",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/reel/Da7dfRCx111/",
    },

    {
      category: "Podcast Reel",
      image: "/podcast-thumbnail-3.png",
      title: "Podcast Reel 3",
      desc: "High retention podcast editing.",
      link: "https://www.instagram.com/reel/DbK3Lgdxhe9/",
    },

    {
      category: "Real Estate",
      image: "/realestate-1.png",
      title: "Real Estate 1",
      desc: "Cinematic property videos.",
      link: "https://www.instagram.com/reel/DbBUJ22Rcfd/",
    },

    {
      category: "Real Estate",
      image: "/realestate-2.png",
      title: "Real Estate 2",
      desc: "Cinematic property videos.",
      link: "https://www.instagram.com/reel/DbcjQHABuA6/",
    },

    {
      category: "Real Estate",
      image: "/realestate-3.jpg",
      title: "Real Estate 3",
      desc: "Cinematic property videos.",
      link: "https://instagram.com",
    },

    {
      category: "Long Video",
      image: "/longvideo-1.png",
      title: "Long Video 1",
      desc: "Long-form YouTube video editing.",
      link: "https://youtu.be/tjcLBkWN7MU",
    },

    {
      category: "AI Videos",
      image: "/ai-video-2.jpg",
      title: "AI Video 2",
      desc: "Creative AI visuals with storytelling.",
      link: "https://instagram.com",
    },

    {
      category: "AI Videos",
      image: "/ai-video-3.jpg",
      title: "AI Video 3",
      desc: "Creative AI visuals with storytelling.",
      link: "https://instagram.com",
    },

    {
      category: "Before / After",
      image: "/before-after-1.png",
      title: "Before After Reel 1",
      desc: "Professional before & after editing.",
      link: "https://www.instagram.com/reel/Dba4yT7JDBt/",
    },

    {
      category: "Before / After",
      image: "/before-after-2.png",
      title: "Before After Reel 2",
      desc: "Professional before & after editing.",
      link: "https://instagram.com",
    },

    {
      category: "Before / After",
      image: "/before-after-3.png",
      title: "Before After Reel 3",
      desc: "Professional before & after editing.",
      link: "https://instagram.com",
    },

    {
      category: "Podcast",
      image: "/long-video-1.jpg",
      title: "Podcast Episode",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/RIfAu4c3o8s",
    },

    {
      category: "Podcast",
      image: "/long-video-2.png",
      title: "Podcast Episode 2",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/VxBg_1ofYbY",
    },

    {
      category: "Podcast",
      image: "/long-video-3.png",
      title: "Podcast Episode 3",
      desc: "Long-form YouTube podcast editing.",
      link: "https://youtu.be/jKQMMRHFnJg",
    },
  ];

  const filteredProjects = projects.filter(
    (item) => item.category === activeCategory
  );

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

      <div className="portfolio-grid">

        {filteredProjects.map((project, index) => {

          const isLongVideo = project.category === "Long Video";
          const isPodcast = project.category === "Podcast";

          return (
            <Reveal
              key={index}
              delay={index * 0.08}
            >
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
                />

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

              </a>
            </Reveal>
          );
        })}

      </div>

    </section>
  );
}

export default Portfolio;