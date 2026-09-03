import React, { useState, useEffect } from "react";
import "./project-detail-erp-software.css";
import heroBg from "../assets/images/section1-bg-nexus-india.png";
import rightImage from "../assets/images/right-img-section1-nexus-india.png";
import techBg from "../assets/images/section5bg.png";
import ctaBg from "../assets/images/section4-bg-chemical-erp.jpeg";

import reactImg from "../assets/images/react.png";
import nodejsImg from "../assets/images/node-js.png";
import mongodbImg from "../assets/images/mongodb.png";
import awsImg from "../assets/images/aws.png";
import figmaImg from "../assets/images/figma.png";

import nexus1 from "../assets/images/nexus-1.png";
import nexus2 from "../assets/images/nexus-2.png";
import nexus3 from "../assets/images/nexus-3.png";
import nexus4 from "../assets/images/nexus-4.png";
import nexus5 from "../assets/images/nexus-5.png";
import nexus6 from "../assets/images/nexus-6.png";
import nexus7 from "../assets/images/nexus-7.png";
import nexus8 from "../assets/images/nexus-8.png";
import nexus9 from "../assets/images/nexus-9.png";
import nexus10 from "../assets/images/nexus-10.png";
import nexus11 from "../assets/images/nexus-11.png";
import nexus12 from "../assets/images/nexus-12.png";
import nexus13 from "../assets/images/nexus-13.png";
import nexus14 from "../assets/images/nexus-14.png";
import nexus15 from "../assets/images/nexus-15.png";
import nexus16 from "../assets/images/nexus-16.png";
import nexus17 from "../assets/images/nexus-17.png";
import nexus18 from "../assets/images/nexus-18.png";
import nexus19 from "../assets/images/nexus-19.png";
import nexus20 from "../assets/images/nexus-20.png";
import nexus21 from "../assets/images/nexus-21.png";
import nexus22 from "../assets/images/nexus-22.png";
import nexus23 from "../assets/images/nexus-23.png";
import nexus24 from "../assets/images/nexus-24.png";
import nexus25 from "../assets/images/nexus-25.png";

const NexusIndia = () => {
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
    { title: "Nexus Screen 1", image: nexus1 },
    { title: "Nexus Screen 2", image: nexus2 },
    { title: "Nexus Screen 3", image: nexus3 },
    { title: "Nexus Screen 4", image: nexus4 },
    { title: "Nexus Screen 5", image: nexus5 },
    { title: "Nexus Screen 6", image: nexus6 },
    { title: "Nexus Screen 7", image: nexus7 },
    { title: "Nexus Screen 8", image: nexus8 },
    { title: "Nexus Screen 9", image: nexus9 },
    { title: "Nexus Screen 10", image: nexus10 },
    { title: "Nexus Screen 11", image: nexus11 },
    { title: "Nexus Screen 12", image: nexus12 },
    { title: "Nexus Screen 13", image: nexus13 },
    { title: "Nexus Screen 14", image: nexus14 },
    { title: "Nexus Screen 15", image: nexus15 },
    { title: "Nexus Screen 16", image: nexus16 },
    { title: "Nexus Screen 17", image: nexus17 },
    { title: "Nexus Screen 18", image: nexus18 },
    { title: "Nexus Screen 19", image: nexus19 },
    { title: "Nexus Screen 20", image: nexus20 },
    { title: "Nexus Screen 21", image: nexus21 },
    { title: "Nexus Screen 22", image: nexus22 },
    { title: "Nexus Screen 23", image: nexus23 },
    { title: "Nexus Screen 24", image: nexus24 },
    { title: "Nexus Screen 25", image: nexus25 },
  ];

  const [activeImage, setActiveImage] = useState(galleryScreenshots[0].image);

  return (
    <div className="project-detail-page">
      {/* SECTION 1*/}
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
              NEXUS <br />
              <span className="highlight-electric">INDIA</span>
            </h1>

            <div className="project-category-pill">
              Ecommerce and Custom Software
            </div>

            <p className="project-hero-desc">
              A professional business platform providing innovative solutions
              and services designed to help businesses grow, connect with
              customers, and build a strong digital presence.
            </p>

            <div className="project-meta-row">
              <div className="project-meta-item">
                <span className="meta-label">Industry</span>
                <span className="meta-value">Ecommerce</span>
              </div>

              <div className="project-meta-divider"></div>

              <div className="project-meta-item">
                <span className="meta-label">Project Type</span>
                <span className="meta-value">Software</span>
              </div>
            </div>
          </div>

          <div className="project-hero-right">
            <div className="project-visual-wrapper">
              <img src={rightImage} alt="Nexus India Software Visualization" />
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

              <span className="project-tech-label">TECHNOLOGY STACK</span>
            </div>

            <h2 className="project-tech-title">
              Technologies
              <br />
              <span className="highlight-electric">We Used</span>
            </h2>

            <p className="project-tech-desc">
              A powerful combination of modern technologies used to develop
              secure, scalable, high-performance business applications and
              digital solutions.
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
                <span className="highlight-electric">GALLERY</span>
              </h2>

              <p className="project-photos-desc">
                Explore selected screens and interfaces showcasing the design,
                functionality, and digital experience of the software solution.
              </p>
            </div>

            <div className="project-photos-right">
              <div className="project-gallery-wrapper">
                {/* Large Feature Screenshot */}
                <div className="project-large-screenshot">
                  <img src={activeImage} alt="Nexus India Active Gallery" />
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

      {/* SECTION 4 */}
      <section
        className="project-cta-section"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="project-cta-container">

          <div className="project-cta-left">
            <div className="project-cta-number-label-group">
              <div className="project-cta-label-line-wrap">
                <span className="project-cta-line"></span>

                <span className="project-cta-label">TAKE ACTION</span>
              </div>
            </div>

            <h2 className="project-cta-title">
              Looking for
              <span className="highlight-electric"> Digital Solutions?</span>
            </h2>

            <p className="project-cta-desc">
              Explore how modern software development, IT consulting, and
              digital solutions can help your business improve operations, scale
              efficiently, and accelerate digital growth.
            </p>
          </div>

          
          <div className="project-cta-center">
            <a href="#demo" className="project-cta-btn">
              <svg
                className="project-cta-paperplane"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Enquiry for Demo</span>

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
                Let's talk
                <br />
                about your business!
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexusIndia;