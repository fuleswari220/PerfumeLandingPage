import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import perfume from "../assests/perfumemodel.webp"

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // New staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    },
    hover: {
      scale: 1.03,
      rotateY: 5,
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.7 + (i * 0.15),
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.08,
      backgroundColor: "#c19b2a",
      boxShadow: "0 15px 30px rgba(193, 155, 42, 0.3)",
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 5px 15px rgba(193, 155, 42, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  };

  // New floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  return (
    <section className="about section-padding" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="about-text"
            variants={textVariants}
          >
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Artfully Crafted Scents That Define <span className="highlight">You</span>
            </motion.h2>

            {[
              "At LuxeScents, we blend art and aroma to craft perfumes that linger — not just in the air, but in memory. Every fragrance begins as an inspiration and evolves into an unforgettable signature, designed to reflect who you are.",
              "Guided by over a decade of passion and precision, our perfumers use rare ingredients and timeless techniques to capture emotions in every drop. From the first note to the last, each scent tells your story — elegantly, effortlessly, eternally."
            ]
              .map((paragraph, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {paragraph}
                </motion.p>
              ))}

            {/* Stats section */}
            <motion.div
              className="stats-grid"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {[
                { number: "13+", text: "Years Experience" },
                { number: "50+", text: "Unique Scents" },
                { number: "10k+", text: "Happy Customers" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={textVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-text">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="btn btn-primary"
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Discover Our Story</span>
              <motion.i
                className="fas fa-arrow-right"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            {/* Animated background particles */}
            <div className="floating-particles">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="particle"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${particle.x}%`
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? {
                    opacity: [0, 0.6, 0],
                    y: -100,
                    rotate: 360
                  } : { opacity: 0, y: 100 }}
                  transition={{
                    delay: particle.delay,
                    duration: particle.duration,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image-container"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <motion.div
              className="about-image"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
            >
              <img
                src={perfume}
                alt="LuxeScents Perfume Craftsmanship"
              />

              {/* Image overlay effect */}
              <motion.div
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Enhanced image frame with gradient */}
            <motion.div
              className="image-frame"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            />

            {/* Floating badge */}
            <motion.div
              className="quality-badge"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1.3, duration: 0.6, ease: "backOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="fas fa-award"></i>
              Premium Quality
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;