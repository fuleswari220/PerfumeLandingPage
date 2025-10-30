import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import midnightrose from "../assests/Midnight Rose.jpg"
import oceanbreeze from "../assests/Ocean Breeze.jpg"
import goldenamber from "../assests/Golden Amber.jpg"
import velvetorchid from "../assests/Velvet Orchid.jpg"


const PerfumeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const perfumes = [
    {
      id: 1,
      name: "Midnight Rose",
      image: midnightrose,
      description: "Captivating blend of dark roses and musk",
      price: "$89.99",
      notes: ["Rose", "Amber", "Musk", "Vanilla"]
    },
    {
      id: 2,
      name: "Ocean Breeze",
      image: oceanbreeze,
      description: "Fresh aquatic notes with sea salt",
      price: "$79.99",
      notes: ["Sea Salt", "Driftwood", "Bergamot"]
    },
    {
      id: 3,
      name: "Golden Amber",
      image: goldenamber,
      description: "Warm and sensual vanilla amber",
      price: "$99.99",
      notes: ["Vanilla", "Amber", "Sandalwood"]
    },
    {
      id: 4,
      name: "Velvet Orchid",
      image: velvetorchid,
      description: "Luxurious orchid with woody notes",
      price: "$94.99",
      notes: ["Orchid", "Oud", "Patchouli", "Saffron"]
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % perfumes.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + perfumes.length) % perfumes.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Animation variants
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.7,
      rotateY: direction > 0 ? 120 : -120,
      filter: "blur(20px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { duration: 1.5 },
        rotateY: { duration: 1.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.7,
      rotateY: direction > 0 ? -120 : 120,
      filter: "blur(20px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const backgroundVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: [1, 1.02, 1],
      rotate: [0, 1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const noteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  return (
    <section className="perfume-carousel-new section-padding" id="collections">
      {/* Animated Background Elements */}
      <motion.div 
        className="carousel-bg-elements"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
      </motion.div>

      <div className="container">
        <motion.div 
          className="carousel-header-new"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Signature Collection</h2>
          <p>Immerse yourself in our exclusive fragrances crafted with precision and passion</p>
        </motion.div>
        
        <div 
          className="carousel-wrapper-new"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <motion.button 
            className="nav-btn-new prev-btn-new"
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="nav-icon">
              <i className="fas fa-chevron-left"></i>
            </div>
          </motion.button>
          
          {/* Main Carousel Track */}
          <div className="carousel-track-new">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="perfume-card-new"
                whileHover={{ y: -10 }}
              >
                {/* Product Image with Glow Effect */}
                <div className="perfume-image-new">
                  <div className="image-glow"></div>
                  <motion.img 
                    src={perfumes[currentIndex].image} 
                    alt={perfumes[currentIndex].name}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="reflection"></div>
                </div>
                
                {/* Product Information */}
                <div className="perfume-info-new">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {perfumes[currentIndex].name}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {perfumes[currentIndex].description}
                  </motion.p>

                  {/* Fragrance Notes */}
                  <motion.div 
                    className="fragrance-notes"
                    initial="initial"
                    animate="animate"
                  >
                    {perfumes[currentIndex].notes.map((note, index) => (
                      <motion.span
                        key={note}
                        className="note-tag"
                        variants={noteVariants}
                        custom={index}
                      >
                        {note}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  {/* Price and Action */}
                  <motion.div 
                    className="product-price-new"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <span className="price-new">{perfumes[currentIndex].price}</span>
                    <motion.button 
                      className="discover-btn-new"
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(135deg, #d4af37 0%, #b8941f 100%)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-shopping-bag"></i>
                      Add to Collection
                    </motion.button>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="card-decoration">
                  <div className="decoration-1"></div>
                  <div className="decoration-2"></div>
                  <div className="decoration-3"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.button 
            className="nav-btn-new next-btn-new"
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="nav-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
          </motion.button>
        </div>
        
        {/* Enhanced Dots Indicator */}
        <motion.div 
          className="carousel-dots-new"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {perfumes.map((perfume, index) => (
            <motion.button
              key={perfume.id}
              className={`dot-new ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <span className="dot-text">{perfume.name.split(' ')[0]}</span>
              <div className="dot-glow"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="progress-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4, ease: "linear" }}
          onAnimationComplete={() => {
            // Reset progress bar
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
              progressBar.style.animation = 'none';
              setTimeout(() => {
                progressBar.style.animation = '';
              }, 10);
            }
          }}
        />
      </div>
    </section>
  );
};

export default PerfumeCarousel;