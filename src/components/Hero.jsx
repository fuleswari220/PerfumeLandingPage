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
      // Hero section animations
      const tlHero = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      gsap.set(contentRef.current.querySelectorAll("h1, p, .hero-buttons"), { opacity: 0, x: -80 });

      tlHero.to(contentRef.current.querySelector("h1"), { x: 0, opacity: 1 })
        .to(contentRef.current.querySelector("p"), { x: 0, opacity: 1 }, "-=0.6")
        .to(contentRef.current.querySelector(".hero-buttons"), { x: 0, opacity: 1 }, "-=0.6");

      // Perfume bottle animations - flying from hero to process section
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

      // Main perfume bottle animation - transforms into process
      gsap.fromTo(
        ".main-perfume",
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

      // Process machine animation
      gsap.fromTo(
        ".process-machine",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 60%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Liquid stream animation
      gsap.fromTo(
        ".liquid-stream",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-machine",
            start: "top 70%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Final cup animation
      gsap.to(".final-cup", {
        x: -800,
        y: 200,
        scale: 2.5,
        rotation: -5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -20%",
          end: "bottom 20%",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress > 0.3) {
              gsap.set(".liquid-stream", { opacity: 0 });
            } else {
              gsap.set(".liquid-stream", { opacity: 1 });
            }
          },
        },
      });

      // Text animations for process section
      const tlProcess = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
      });

      tlProcess.from(sectionRef.current.querySelector("h2"), {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(sectionRef.current.querySelector(".process-desc"), {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.3");

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero" id="home">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-content" ref={contentRef}>
            <h1>ESSENCE</h1>
            <p>
              Crafted with passion, designed for moments that matter - <strong>ESSENCE</strong> <br></br>
              brings you timeless fragrances inspired by nature and refined through artful craftsmanship.
            </p>

            <div className="hero-buttons">
              <button className="hero-btn primary">Discover Scents</button>
              <button className="hero-btn secondary">Explore Collections</button>
            </div>
          </div>

          {/* Right Side - Images & Elements */}
          <div className="hero-right">
            {/* Main Perfume Bottle */}
            <img src={perfume2} alt="Main Perfume" className="main-perfume" />

            {/* Floating Perfume Bottles */}
            <img src={perfume2} alt="Perfume 1" className="perfume-bottle perfume1" />
            <img src={perfume2} alt="Perfume 2" className="perfume-bottle perfume2" />
            <img src={perfume2} alt="Perfume 3" className="perfume-bottle perfume3" />
            <img src={perfume2} alt="Perfume 4" className="perfume-bottle perfume4" />

            {/* Decorative Elements */}
            <img src={perfume2} alt="Flower 1" className="deco-element deco1" />
            <img src={perfume2} alt="Flower 2" className="deco-element deco2" />
            <img src={perfume2} alt="Flower 3" className="deco-element deco3" />
            <img src={perfume2} alt="Flower 4" className="deco-element deco4" />
          </div>
        </div>
      </div>

      {/* Process Section */}
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