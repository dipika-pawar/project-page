import React, { useState, useEffect } from "react";
import "./project-detail-erp-software.css";
import heroBg from "../assets/images/section1-bg-smart-tailoring.png";
import rightImage from "../assets/images/right-img-section1-smart-tailoring.png";
import techBg from "../assets/images/section5bg.png";
import ctaBg from "../assets/images/section4-bg-chemical-erp.jpeg";

import reactImg from "../assets/images/react.png";
import nodejsImg from "../assets/images/node-js.png";
import mongodbImg from "../assets/images/mongodb.png";
import awsImg from "../assets/images/aws.png";
import figmaImg from "../assets/images/figma.png";

import sonaliCreation1 from "../assets/images/sonali-creation-1.png";
import sonaliCreation2 from "../assets/images/sonali-creation-2.png";
import sonaliCreation3 from "../assets/images/sonali-creation-3.png";
import sonaliCreation4 from "../assets/images/sonali-creation-4.png";
import sonaliCreation5 from "../assets/images/sonali-creation-5.png";
import sonaliCreation6 from "../assets/images/sonali-creation-6.png";
import sonaliCreation7 from "../assets/images/sonali-creation-7.png";
import sonaliCreation8 from "../assets/images/sonali-creation-8.png";
import sonaliCreation9 from "../assets/images/sonali-creation-9.png";
import sonaliCreation10 from "../assets/images/sonali-creation-10.png";

const BeyondSixSenses = () => {
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

  const galleryScreenshots = [
    {
      title: "Dashboard Overview",
      image: sonaliCreation1,
    },
    {
      title: "Customer Orders",
      image: sonaliCreation2,
    },
    {
      title: "Order Analytics",
      image: sonaliCreation3,
    },
    {
      title: "Measurement Records",
      image: sonaliCreation4,
    },
    {
      title: "Boutique Insights",
      image: sonaliCreation5,
    },
    {
      title: "Chart Analytics",
      image: sonaliCreation6,
    },
    {
      title: "Tailoring Workflow",
      image: sonaliCreation7,
    },
    {
      title: "Client Profiles",
      image: sonaliCreation8,
    },
    {
      title: "Performance Metrics",
      image: sonaliCreation9,
    },
    {
      title: "Management Panel",
      image: sonaliCreation10,
    },
  ];

  const [activeImage, setActiveImage] = useState(galleryScreenshots[0].image);

  return (
    <div className="project-detail-page">
      {/* SECTION 1 */}
      <section
        className="project-hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="project-hero-container">

          <div className="project-hero-left">
            <div className="project-number-label-group">
              <div className="project-detail-label-line-wrap">
                <span className="project-detail-line"></span>
                <span className="project-detail-label">PROJECT OVERVIEW</span>
              </div>
            </div>

            <h1 className="project-hero-title">
              Smart
              <br />
              <span className="highlight-electric">Tailoring</span>
            </h1>

            <div className="project-category-pill">
              Website
            </div>

            <p className="project-hero-desc">
              A smart digital tailoring platform designed to simplify custom clothing management by helping businesses and customers manage measurements, orders, designs, and personalized garment requirements through a seamless web experience.
            </p>

            <div className="project-meta-row">
              <div className="project-meta-item">
                <span className="meta-label">Industry</span>
                <span className="meta-value">Fashion & Apparel</span>
              </div>
              <div className="project-meta-divider"></div>
              <div className="project-meta-item">
                <span className="meta-label">Project Type</span>
                <span className="meta-value">Website</span>
              </div>
              <div className="project-meta-item project-meta-action">
                <a
                  href="https://www.sonalicreations.com/"
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

          <div className="project-hero-right">
            <div className="project-visual-wrapper">
              <img src={rightImage} alt="Beyond Six Senses Visualization" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="project-tech-section"
        style={{ backgroundImage: `url(${techBg})` }}
      >
        <div className="project-tech-container">

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
              A modern technology stack used to develop a responsive and efficient tailoring management platform with a smooth user experience.
            </p>
          </div>


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

      {/* SECTION 3 */}
      <section
        className="project-photos-section"
        style={{ backgroundImage: `url(${techBg})` }}
      >
        <div className="project-photos-outer-wrapper">
          <div className="project-photos-container">
            {/* LEFT SIDE INFO */}
            <div className="project-photos-left">
              <div className="project-photos-number-label-group">
                <div className="project-photos-label-line-wrap">
                  <span className="project-photos-line"></span>
                  <span className="project-photos-label">PROJECT GALLERY</span>
                </div>
              </div>

              <h2 className="project-photos-title">
                Project
                <br />
                <span className="highlight-electric">Gallery</span>
              </h2>

              <p className="project-photos-desc">
                Explore the Smart Tailoring platform and discover its features for managing measurements, custom orders, tailoring operations, and customer requirements.
              </p>
            </div>

            <div className="project-photos-right">
              <div className="project-gallery-wrapper">
                {/* Large Feature Screenshot */}
                <div className="project-large-screenshot">
                  <img
                    src={activeImage}
                    alt="Beyond Six Senses Dashboard Active Gallery"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-scroller-wrapper">
            <div className="project-scroller-track">
              {galleryScreenshots
                .concat(galleryScreenshots)
                .map((item, index) => (
                  <div
                    className="project-small-screenshot-card"
                    key={index}
                    onClick={() => setActiveImage(item.image)}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4*/}
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
              Discover a smarter way to manage custom tailoring, customer measurements, orders, and clothing production.
            </p>
          </div>

          <div className="project-cta-center">
            <a
              href="https://www.sonalicreations.com/"
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

export default BeyondSixSenses;