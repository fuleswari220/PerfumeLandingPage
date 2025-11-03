import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import perfume from "../assests/perfume-bottle-nature.jpg"
import perfume2 from "../assests/wallpaper.jpg"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced Hero section animations
      const tlHero = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

      gsap.set(contentRef.current.querySelectorAll(".brand-name, .luxury-badge, .hero-title, .hero-subtitle, .hero-actions"), { 
        opacity: 0, 
        y: 50 
      });

      tlHero
        .to(contentRef.current.querySelector(".brand-name"), { y: 0, opacity: 1, duration: 0.8 })
        .to(contentRef.current.querySelector(".luxury-badge"), { y: 0, opacity: 1 }, "-=0.4")
        .to(contentRef.current.querySelector(".hero-title"), { y: 0, opacity: 1 }, "-=0.6")
        .to(contentRef.current.querySelector(".hero-subtitle"), { y: 0, opacity: 1 }, "-=0.4")
        .to(contentRef.current.querySelector(".hero-actions"), { y: 0, opacity: 1 }, "-=0.4");

      // Main perfume bottle hover effect
      gsap.to(".main-perfume-bottle", {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

      // Keep your existing scroll animations
      const perfumes = [
        { cls: ".perfume1", x: 400, y: 300, rotation: 15 },
        { cls: ".perfume2", x: -500, y: 400, rotation: -20 },
        { cls: ".perfume3", x: 600, y: 200, rotation: 25 },
        { cls: ".perfume4", x: -450, y: 350, rotation: -15 },
      ];

      perfumes.forEach(perfume => {
        gsap.to(perfume.cls, {
          x: perfume.x,
          y: perfume.y,
          rotation: perfume.rotation,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: '.process-section',
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          }
        });
      });

      // Rest of your existing animations...
      gsap.fromTo(
        ".main-perfume-bottle",
        { x: 0, y: 0, scale: 1 },
        {
          x: 200,
          y: 400,
          scale: 0.8,
          rotation: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Enhanced Hero Section matching the design */}
      <div className="hero" id="home">
        {/* Background Image Container */}
        <div className="hero-bg-image">
          <img src={perfume2} alt="Luxury Perfume Background" className="bg-image" />
          <div className="bg-overlay"></div>
        </div>

        {/* Background Elements */}
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`
              }}></div>
            ))}
          </div>
        </div>

        <div className="hero-container">
          {/* Left Side - Text Content matching the design */}
          <div className="hero-content" ref={contentRef}>
            <div className="content-wrapper">
              {/* Brand Name */}
              <div className="brand-name">LuxeScents</div>

              {/* Luxury Badge */}
              <div className="luxury-badge">
                <span className="badge-text" style={{color:"white"}}>LUXURY COLLECTION</span>
              </div>

              {/* Main Title */}
              <h1 className="hero-title">ESSENCE</h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                Crafted with passion, designed for<br />
                moments that matter - <strong>ESSENCE</strong>
              </p>

              {/* Buttons */}
              <div className="hero-actions">
                <button className="hero-btn primary">
                  <div className="btn-content">
                    <span>Discover Scents</span>
                    <div className="btn-arrow">→</div>
                  </div>
                </button>
                <button className="hero-btn secondary">
                  <div className="btn-content">
                    <span>Explore Collections</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Display */}
          <div className="hero-visual">
            <div className="bottle-display">
              <div className="bottle-glow"></div>
              <img src={perfume2} alt="Premium Perfume" className="main-perfume-bottle" />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section - Keep existing */}
      <div className="process-section" ref={sectionRef}>
        <div className="process-container">
          <div className="process-bg"></div>

          {/* Left Side - Text Content */}
          <div className="process-text">
            <h2>The Art of Perfumery</h2>
            <p className="process-desc">
              From the rarest flowers to the most exotic spices, each ingredient tells a story.
              Our master perfumers travel the world to source only the finest essences, capturing
              nature's most beautiful moments in every bottle. The delicate process begins with
              careful extraction, where petals and botanicals release their soul into precious oils.
              These precious essences then dance together in perfect harmony, aging gracefully
              like fine wine until they reach their peak. The final creation is more than a
              fragrance—it's a memory, an emotion, a piece of art that evolves with you throughout the day.
            </p>
          </div>

          {/* Right Side - Images & Elements */}
          <div className="process-elements">
            <h1 className="process-title">ESSENCE</h1>
            <img src={perfume} alt="Process Background" className="process-bg-element" />
            <img src={perfume} alt="Perfume Machine" className="process-machine" />
            <img src={perfume} alt="Perfume Bottle" className="final-cup" />
            <img src={perfume} alt="Liquid Stream" className="liquid-stream" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;