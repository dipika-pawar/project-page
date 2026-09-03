import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./project-page.css";
import heroBg from "../assets/images/section1bg.png";
import rightImgSection1 from "../assets/images/sectiononeright.png";
import featuredBg from "../assets/images/section2bg.png";
import projectsBg from "../assets/images/section3bg.png";
import servicesBg from "../assets/images/section4bg.png";
import techBg from "../assets/images/section5bg.png";
import ctaBg from "../assets/images/section5bg.png";

import reactImg from "../assets/images/react.png";
import phpImg from "../assets/images/php.png";
import pythonImg from "../assets/images/python.png";
import awsImg from "../assets/images/aws.png";
import mysqlImg from "../assets/images/mysql.png";
import mongodbImg from "../assets/images/mongodb.png";
import dockerImg from "../assets/images/docker.png";
import figmaImg from "../assets/images/figma.png";
import nodejsImg from "../assets/images/node-js.png";

import beyondSixSensesImg from "../assets/images/beyondSixSenses-project.png";
import cajnkImg from "../assets/images/cajnk-project.png";
import civikImg from "../assets/images/civik-project.png";
import lpcImg from "../assets/images/lpc-project.png";
import marigoldImg from "../assets/images/marigold-project.png";
import nexusImg from "../assets/images/nexus-project.png";
import sonaliImg from "../assets/images/sonali-project.png";
import texcarpImg from "../assets/images/texcarp-project.png";
import vaachiImg from "../assets/images/vaachi-project.png";

import featuredProject1Img from "../assets/images/featured-project1.png";
import featuredProject2Img from "../assets/images/featured-project2.png";
import featuredProject3Img from "../assets/images/featured-project3.png";

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["ALL", "WEBSITES", "ECOMMERCE", "SOFTWARE"];

  const featuredProjectsList = [
    {
      cat: "CRM + ECOMMERCE",
      title: "CRM ERP FOR CORPORATE COMPANIES",
      desc: "Corporate website and custom CRM to manage leads and sales.",
      image: featuredProject1Img,
      path: "/featured-projects/chemical-erp",
    },
    {
      cat: "ECOMMERCE + CUSTOM SOFTWARE",
      title: "NEXUS INDIA",
      desc: "Empowering women entrepreneurs across India to sell products.",
      image: featuredProject2Img,
      path: "/featured-projects/nexus-india",
    },
    {
      cat: "WEBSITE",
      title: "BEYOND SIX SENSES",
      desc: "Wellness counselling and transformational consulting platform.",
      image: featuredProject3Img,
      path: "/featured-projects/beyond-six-senses",
    },
    {
      cat: "WEBSITE",
      title: "SMART TAILORING",
      desc: "Seamless measurement, order, design, and custom garment management.",
      image: sonaliImg,
      path: "/featured-projects/smart-tailoring",
    },
  ];

  const allProjectsList = [
    {
      name: "Marigold",
      type: "Website",
      category: ["WEBSITES"],
      image: marigoldImg,
      path: "/projects/marigold",
    },
    {
      name: "Nexus India",
      type: "Ecommerce + Custom Software",
      category: ["ECOMMERCE", "SOFTWARE"],
      image: nexusImg,
      path: "/featured-projects/nexus-india",
    },
    {
      name: "CAJNK",
      type: "Website",
      category: ["WEBSITES"],
      image: cajnkImg,
      path: "/projects/cajnk",
    },
    {
      name: "Smart Tailoring",
      type: "Website",
      category: ["WEBSITES", "ECOMMERCE", "SOFTWARE"],
      image: sonaliImg,
      path: "/featured-projects/smart-tailoring",
    },
    {
      name: "Beyond Six Senses",
      type: "Website",
      category: ["WEBSITES"],
      image: beyondSixSensesImg,
      path: "/featured-projects/beyond-six-senses",
    },
    {
      name: "LPC",
      type: "Website",
      category: ["WEBSITES"],
      image: lpcImg,
      path: "/projects/lpc",
    },
    {
      name: "Texcarp",
      type: "Website",
      category: ["WEBSITES", "SOFTWARE"],
      image: texcarpImg,
      path: "/projects/texcarp",
    },
    {
      name: "Civik Experiences",
      type: "Website",
      category: ["WEBSITES"],
      image: civikImg,
      path: "/projects/civik-experiences",
    },
    {
      name: "Vaachi",
      type: "Website",
      category: ["WEBSITES"],
      path: "/projects/vaachi",
      image: vaachiImg,
    },
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? allProjectsList
      : allProjectsList.filter((p) => p.category.includes(activeCategory));

  const services = [
    {
      title: "Websites",
      desc: "Responsive, fast & SEO-friendly websites.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Web Applications",
      desc: "Scalable and secure web applications.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      desc: "iOS & Android apps that perform.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "E-Commerce",
      desc: "Online stores that drive sales.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      title: "Custom Software",
      desc: "Tailored software for your business.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infra & DevOps.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: "PHP", icon: <img src={phpImg} alt="PHP" /> },
    { name: "Python", icon: <img src={pythonImg} alt="Python" /> },
    { name: "AWS", icon: <img src={awsImg} alt="AWS" /> },
    { name: "MySQL", icon: <img src={mysqlImg} alt="MySQL" /> },
    { name: "MongoDB", icon: <img src={mongodbImg} alt="MongoDB" /> },
    { name: "Docker", icon: <img src={dockerImg} alt="Docker" /> },
    { name: "Figma", icon: <img src={figmaImg} alt="Figma" /> },
    { name: "React", icon: <img src={reactImg} alt="React" /> },
    { name: "Node.js", icon: <img src={nodejsImg} alt="Node.js" /> },
  ];

  return (
    <div className="reet-portfolio">
      {/* 1. HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-container">
          <div className="hero-left-content">
            <div className="hero-section-label">
              <span className="hero-label-line"></span>
              <span className="hero-label-text">OUR PROJECTS</span>
            </div>

            <h1 className="hero-title">
              IDEAS WE TURNED INTO
              <br />
              <span className="highlight-electric">REAL IMPACT</span>
            </h1>

            <p className="hero-subtitle">
              Explore our portfolio of innovative IT solutions that solve real
              challenges and create meaningful progress for businesses.
            </p>

            <div className="hero-stats-row">
              <div className="hero-stat-col">
                <span className="stat-number">50+</span>
                <span className="stat-label">
                  Projects
                  <br />
                  Delivered
                </span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-col">
                <span className="stat-number">20+</span>
                <span className="stat-label">
                  Happy
                  <br />
                  Clients
                </span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-col">
                <span className="stat-number">10+</span>
                <span className="stat-label">
                  Industries
                  <br />
                  Served
                </span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-col">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  Commitment
                  <br />
                  to Quality
                </span>
              </div>
            </div>
          </div>

          <div className="hero-right-visual">
            <img src={rightImgSection1} alt="IT Project Visualization" />
          </div>
        </div>
      </section>

      {/*FEATURED PROJECTS */}
      <section
        id="featured"
        className="featured-section"
        style={{ backgroundImage: `url(${featuredBg})` }}
      >
        <div className="section-header-center featured-header-space">
          <span className="hero-label-text section-our-work-label">
            — OUR WORK —
          </span>
          <h2>
            FEATURED <span className="highlight-electric">PROJECTS</span>
          </h2>
          <p className="section-subtitle">
            Real solutions. Real impact. Explore some of our latest work.
          </p>
          <div className="yellow-underline"></div>
        </div>
        <div className="featured-grid-8">
          {featuredProjectsList.map((project, index) => (
            <div className="featured-card" key={index}>
              <div className="featured-card-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="featured-card-content">
                <div>
                  <span className="featured-card-category">{project.cat}</span>
                  <h3 className="featured-card-title">{project.title}</h3>
                  <p className="featured-card-desc">{project.desc}</p>
                </div>
                <div className="featured-card-footer">
                  <Link to={project.path} className="featured-card-link">
                    Explore more
                    <span className="card-arrow-circle">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section
        className="all-projects-section"
        style={{ backgroundImage: `url(${projectsBg})` }}
      >
        <div className="section-header-center">
          <span className="hero-label-text section-our-work-label">
            — OUR PORTFOLIO —
          </span>
          <h2>
            ALL <span className="highlight-electric">PROJECTS</span>
          </h2>
          <p className="section-subtitle all-projects-subtitle-space">
            Explore more digital products and solutions we've built across
            industries.
          </p>
          <div className="yellow-underline" style={{ marginTop: "1rem" }}></div>
        </div>

        <nav className={`category-nav-bar ${isScrolled ? "scrolled" : ""}`}>
          <div className="category-scroll-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              to={project.path}
              className="project-tile"
              key={index}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <div className="tile-image-wrapper">
                <img src={project.image} alt={project.name} />
                <div className="tile-arrow">&rarr;</div>
              </div>

              <div className="tile-info">
                <span className="tile-type">{project.type}</span>
                <h4 className="tile-name">{project.name}</h4>
                <div className="tile-blue-line"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section
        className="what-we-build-section"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="section-header-center expertise-header-wrap">
          <span className="hero-label-text section-our-work-label">
            — OUR EXPERTISE —
          </span>
          <h2>
            WHAT WE <span className="highlight-electric">BUILD</span>
          </h2>
          <p className="section-subtitle">
            Innovative digital solutions tailored to help your business grow.
          </p>
          <div className="yellow-underline"></div>
        </div>
        <div className="enterprise-service-bar">
          {services.map((service, index) => (
            <div className="enterprise-service-segment" key={index}>
              <div className="service-top-content">
                <div className="service-seg-icon">{service.icon}</div>
                <h3 className="service-seg-title">{service.title}</h3>
                <p className="service-seg-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES WE USE */}
      <section
        className="technologies-section"
        style={{ backgroundImage: `url(${techBg})` }}
      >
        <div className="section-header-center tech-header-bottom-space">
          <span className="hero-label-text section-our-work-label">
            — OUR TECH STACK —
          </span>
          <h2>
            TECHNOLOGIES <span className="highlight-electric">WE USE</span>
          </h2>
          <p className="section-subtitle">
            Powering innovation with industry-leading technologies.
          </p>
          <div className="yellow-underline"></div>
        </div>
        <div className="tech-stack-container">
          <button className="tech-slider-arrow tech-arrow-left">&larr;</button>
          <div className="tech-strip-wrapper">
            <div className="tech-strip">
              {technologies.concat(technologies).map((tech, index) => (
                <div className="tech-pill-box" key={index}>
                  <span className="tech-svg-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="tech-slider-arrow tech-arrow-right">&rarr;</button>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="cta-section"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-eyebrow-wrapper">
              <span className="eyebrow">HAVE AN IDEA?</span>
              <span className="cta-eyebrow-line"></span>
            </div>
            <h2>
              LET'S <span className="highlight-electric">BUILD IT.</span>
            </h2>
            <p>
              Share your idea with us and let's turn it into a powerful digital
              solution that drives real results.
            </p>
          </div>
          <div className="cta-right-content">
            <a href="#start" className="cta-gradient-btn">
              Start Project &rarr;
            </a>
            <span className="cta-right-phone">
              Or call us: <strong>+91 90229 93526</strong>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
