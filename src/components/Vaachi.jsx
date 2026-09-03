import React, { useEffect } from "react";
import "./project-detail.css";
import heroBg from "../assets/images/vaachi-bg-hero-section-img.png";
import rightImage from "../assets/images/vaachi-right-side-img.png";
import techBg from "../assets/images/section5bg.png";
import ctaBg from "../assets/images/section4-bg-chemical-erp.jpeg";

// Technology Icons Import
import reactImg from "../assets/images/react.png";
import nodejsImg from "../assets/images/node-js.png";
import mongodbImg from "../assets/images/mongodb.png";
import awsImg from "../assets/images/aws.png";
import figmaImg from "../assets/images/figma.png";

const Vaachi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStackList = [
    { name: "React", icon: reactImg },
    { name: "Node.js", icon: nodejsImg },
    { name: "MongoDB", icon: mongodbImg },
    { name: "AWS", icon: awsImg },
    { name: "Figma", icon: figmaImg },
  ];

  return (
    <div className="project-detail-page">
      {/* SECTION 1: HERO SECTION */}
      <section
        className="project-hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="project-hero-container">
          {/* LEFT SIDE CONTENT */}
          <div className="project-hero-left">
            <div className="project-number-label-group">
              <div className="project-detail-label-line-wrap">
                <span className="project-detail-line"></span>
                <span className="project-detail-label">PROJECT OVERVIEW</span>
              </div>
            </div>

            <h1 className="project-hero-title">
              VAACHI
              <br />
              <span className="highlight-electric">FOUNDATION</span>
            </h1>

            <div className="project-category-pill">
              Website
            </div>

            <p className="project-hero-desc">
              Explore the Vaachi Foundation's digital experience, highlighting its performances, arts education initiatives, cultural collaborations, and community-focused work.
            </p>

            <div className="project-meta-row">
              <div className="project-meta-item">
                <span className="meta-label">Industry</span>
                <span className="meta-value">Non-Profit, Arts & Culture</span>
              </div>
              <div className="project-meta-divider"></div>
              <div className="project-meta-item">
                <span className="meta-label">Project Type</span>
                <span className="meta-value">Website</span>
              </div>
              <div className="project-meta-item project-meta-action">
                <a
                  href="https://www.vaachi.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-glass-btn"
                >
                  <span>Go to website</span>
                  <span className="glass-btn-arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE VISUALIZATION */}
          <div className="project-hero-right">
            <div className="project-visual-wrapper">
              <img src={rightImage} alt="CA JNK & Co Visualization" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH STACK */}
      <section
        className="project-tech-section"
        style={{ backgroundImage: `url(${techBg})` }}
      >
        <div className="project-tech-container">
          {/* LEFT SIDE INFO */}
          <div className="project-tech-left">
            <div className="project-tech-label-group">
              <span className="project-tech-line"></span>
              <span className="project-tech-label">TECH STACK</span>
            </div>
            <h2 className="project-tech-title">
              Technologies
              <br />
              <span className="highlight-electric">We Used</span>
            </h2>
            <p className="project-tech-desc">
              A modern technology stack used to create an expressive, responsive, and engaging digital experience for the foundation and its initiatives.
            </p>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="project-tech-right">
            <div className="project-tech-grid">
              {techStackList.map((tech, index) => (
                <div className="project-tech-card" key={index}>
                  <div className="project-tech-icon-box">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                  <span className="project-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TAKE ACTION / DEMO CTA */}
      <section
        className="project-cta-section"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="project-cta-container">
          {/* LEFT SIDE CONTENT */}
          <div className="project-cta-left">
            <div className="project-cta-number-label-group">
              <div className="project-cta-label-line-wrap">
                <span className="project-cta-line"></span>
                <span className="project-cta-label">TAKE ACTION</span>
              </div>
            </div>

            <h2 className="project-cta-title">
              WANT TO <span className="highlight-electric">GO TO WEBSITE?</span>
            </h2>

            <p className="project-cta-desc">
              Discover how performing arts can amplify human values, build empathy, preserve cultural heritage, and bring communities together.
            </p>
          </div>

          {/* CENTER/RIGHT CTA BUTTON with browser earth icon */}
          <div className="project-cta-center">
            <a
              href="https://www.vaachi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              <svg
                className="project-cta-paperplane"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5 4.5 15.5 8 15.5 12C15.5 16 14.5 19.5 12 22C9.5 19.5 8.5 16 8.5 12C8.5 8 9.5 4.5 12 2Z"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Go to Website</span>
              <span className="project-cta-btn-arrow">&rarr;</span>
            </a>
          </div>

          {/* FAR RIGHT ARROW & TEXT */}
          <div className="project-cta-right">
            <div className="project-cta-arrow-group">
              <svg
                className="project-cta-arrow-svg"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 40 Q 50 10, 90 35"
                  stroke="#E2B141"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M75 28 L90 35 L80 45"
                  stroke="#E2B141"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="project-cta-hint">
                Check it out
                <br />
                live now!
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vaachi;