import React, { useState, useEffect } from 'react';
import './project-detail-erp-software.css';
import heroBg from '../assets/images/section1-bg-chemical-erp.jpeg';
import rightImage from '../assets/images/section1-right-img-chemical-erp.png';
import techBg from '../assets/images/section5bg.png';
import ctaBg from '../assets/images/section4-bg-chemical-erp.jpeg';

import reactImg from '../assets/images/react.png';
import nodejsImg from '../assets/images/node-js.png';
import mongodbImg from '../assets/images/mongodb.png';
import awsImg from '../assets/images/aws.png';
import figmaImg from '../assets/images/figma.png';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.jpg';
import img21 from '../assets/images/21.jpg';
import img22 from '../assets/images/22.jpg';
import img23 from '../assets/images/23.jpg';
import img24 from '../assets/images/24.jpg';
import img25 from '../assets/images/25.jpg';

const ChemicalERP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStackList = [
    { name: 'React', icon: reactImg },
    { name: 'Node.js', icon: nodejsImg },
    { name: 'MongoDB', icon: mongodbImg },
    { name: 'AWS', icon: awsImg },
    { name: 'Figma', icon: figmaImg }
  ];

  const galleryScreenshots = [
    { title: 'Dashboard View 1', image: img1 },
    { title: 'Dashboard View 2', image: img2 },
    { title: 'Dashboard View 3', image: img3 },
    { title: 'Dashboard View 4', image: img4 },
    { title: 'Dashboard View 5', image: img5 },
    { title: 'Dashboard View 6', image: img6 },
    { title: 'Dashboard View 7', image: img7 },
    { title: 'Dashboard View 8', image: img8 },
    { title: 'Dashboard View 9', image: img9 },
    { title: 'Dashboard View 10', image: img10 },
    { title: 'Dashboard View 11', image: img11 },
    { title: 'Dashboard View 12', image: img12 },
    { title: 'Dashboard View 13', image: img13 },
    { title: 'Dashboard View 14', image: img14 },
    { title: 'Dashboard View 15', image: img15 },
    { title: 'Dashboard View 16', image: img16 },
    { title: 'Dashboard View 17', image: img17 },
    { title: 'Dashboard View 18', image: img18 },
    { title: 'Dashboard View 19', image: img19 },
    { title: 'Dashboard View 20', image: img20 },
    { title: 'Dashboard View 21', image: img21 },
    { title: 'Dashboard View 22', image: img22 },
    { title: 'Dashboard View 23', image: img23 },
    { title: 'Dashboard View 24', image: img24 },
    { title: 'Dashboard View 25', image: img25 }
  ];

  const [activeImage, setActiveImage] = useState(
    galleryScreenshots[0].image
  );

  return (
    <div className="project-detail-page">

      <section
        className="project-hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="project-hero-container">

          <div className="project-hero-left">

            <div className="project-number-label-group">
              <div className="project-detail-label-line-wrap">
                <span className="project-detail-line"></span>
                <span className="project-detail-label">
                  PROJECT OVERVIEW
                </span>
              </div>
            </div>

            <h1 className="project-hero-title">
              CRM ERP FOR<br />
              <span className="highlight-electric">
                CORPORATE COMPANIES
              </span>
            </h1>

            <div className="project-category-pill">
              Enterprise Resource Planning
            </div>

            <p className="project-hero-desc">
              A specialized ERP solution designed for formula-based chemical
              manufacturing, lot traceability, regulatory compliance,
              special zoning, and automated hazard labeling.
            </p>

            <div className="project-meta-row">

              <div className="project-meta-item">
                <span className="meta-label">
                  Industry
                </span>

                <span className="meta-value">
                  Chemical Manufacturing and Another also
                </span>
              </div>

              <div className="project-meta-divider"></div>

              <div className="project-meta-item">
                <span className="meta-label">
                  Project Type
                </span>

                <span className="meta-value">
                  Web Application
                </span>
              </div>

            </div>

          </div>

          <div className="project-hero-right">
            <div className="project-visual-wrapper">
              <img
                src={rightImage}
                alt="Chemical ERP Visualization"
              />
            </div>
          </div>

        </div>
      </section>


      <section
        className="project-tech-section"
        style={{ backgroundImage: `url(${techBg})` }}
      >
        <div className="project-tech-container">

          <div className="project-tech-left">

            <div className="project-tech-label-group">
              <span className="project-tech-line"></span>
              <span className="project-tech-label">
                TECH STACK
              </span>
            </div>

            <h2 className="project-tech-title">
              Technologies<br />
              <span className="highlight-electric">
                We Used
              </span>
            </h2>

            <p className="project-tech-desc">
              A powerful combination of modern technologies to build a
              secure, scalable, and high-performance solution.
            </p>

          </div>

          <div className="project-tech-right">

            <div className="project-tech-grid">

              {techStackList.map((tech, index) => (
                <div
                  className="project-tech-card"
                  key={index}
                >

                  <div className="project-tech-icon-box">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                    />
                  </div>

                  <span className="project-tech-name">
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


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
                  <span className="project-photos-label">
                    PROJECT GALLERY
                  </span>
                </div>
              </div>

              <h2 className="project-photos-title">
                Project<br />
                <span className="highlight-electric">
                  Gallery
                </span>
              </h2>

              <p className="project-photos-desc">
                Here are some glimpses of the project, showcasing the
                design and functionality.
              </p>

            </div>

            <div className="project-photos-right">

              <div className="project-gallery-wrapper">

                <div className="project-large-screenshot">
                  <img
                    src={activeImage}
                    alt="ChemERP Dashboard Active Gallery"
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
                    onClick={() =>
                      setActiveImage(item.image)
                    }
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

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

          <div className="project-cta-left">

            <div className="project-cta-number-label-group">

              <div className="project-cta-label-line-wrap">

                <span className="project-cta-line"></span>

                <span className="project-cta-label">
                  TAKE ACTION
                </span>

              </div>

            </div>

            <h2 className="project-cta-title">
              Interested in{' '}
              <span className="highlight-electric">
                a Demo?
              </span>
            </h2>

            <p className="project-cta-desc">
              See how our CRM ERP solution can help your business grow.
              Get in touch with us for a personalized demo.
            </p>

          </div>

          <div className="project-cta-center">

            <a
              href="#demo"
              className="project-cta-btn"
            >

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

              <span>
                Enquiry for Demo
              </span>

              <span className="project-cta-btn-arrow">
                &rarr;
              </span>

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
                Let's talk<br />
                about your needs!
              </span>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ChemicalERP;