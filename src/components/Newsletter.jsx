import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Subscribed with:', email);
    setIsSubmitted(true);
    setEmail('');
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 35px rgba(212, 175, 55, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    loading: {
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    delay: i * 0.2,
    duration: Math.random() * 4 + 3,
    x: Math.random() * 100
  }));

  return (
    <section className="newsletter-section section-padding" id="newsletter">
      {/* Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>Discover the Essence of Luxury</h1>
        <p>Join our newsletter to unlock a world of exclusive fragrances and offers</p>
      </motion.div>

      {/* Background Elements */}
      <div className="newsletter-bg-elements">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: -100,
              rotate: 180
            }}
            transition={{
              delay: element.delay,
              duration: element.duration,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div 
          className="newsletter-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {isSubmitted ? (
            <motion.div 
              className="success-state"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              <motion.div 
                className="success-icon"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <i className="fas fa-check"></i>
                <div className="success-glow"></div>
              </motion.div>
              
              <h3>Welcome to Our Fragrance Family!</h3>
              <p>
                You're now part of an exclusive community. Check your email for a special welcome gift from LuxeScents.
              </p>
              
              <motion.div 
                className="success-benefit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <i className="fas fa-gift"></i>
                <span>Your exclusive 15% discount is on its way!</span>
              </motion.div>
            </motion.div>
          ) : (
            <div className="newsletter-layout">
              <motion.div 
                className="benefits-column"
                variants={itemVariants}
              >
                <motion.div 
                  className="benefits-header"
                  variants={itemVariants}
                >
                  <h3>Why Join Our Circle?</h3>
                  <p>Experience these exclusive benefits when you subscribe</p>
                </motion.div>

                <motion.div 
                  className="benefits-list"
                  variants={containerVariants}
                >
                  {[
                    { 
                      icon: 'gem', 
                      text: 'First Access to New Collections',
                      description: 'Be the first to experience our latest fragrances'
                    },
                    { 
                      icon: 'percent', 
                      text: 'Members-Only Discounts',
                      description: 'Exclusive offers and special pricing'
                    },
                    { 
                      icon: 'star', 
                      text: 'Expert Fragrance Guidance',
                      description: 'Personalized scent recommendations'
                    },
                    { 
                      icon: 'shipping-fast', 
                      text: 'Priority Shipping',
                      description: 'Faster delivery on all your orders'
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.text}
                      className="benefit-card"
                      variants={itemVariants}
                      whileHover={{ 
                        x: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="benefit-icon">
                        <motion.i 
                          className={`fas fa-${benefit.icon}`}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="benefit-content">
                        <h4>{benefit.text}</h4>
                        <p>{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="trust-section"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="trust-stats">
                    <div className="trust-stat">
                      <span className="stat-number">10K+</span>
                      <span className="stat-label">Fragrance Lovers</span>
                    </div>
                    <div className="trust-stat">
                      <span className="stat-number">99%</span>
                      <span className="stat-label">Satisfaction</span>
                    </div>
                    <div className="trust-stat">
                      <span className="stat-number">24/7</span>
                      <span className="stat-label">Support</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="form-column"
                variants={itemVariants}
              >
                <motion.div 
                  className="form-header"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="icon-container"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-envelope-open-text"></i>
                    <div className="icon-glow"></div>
                  </motion.div>
                  
                  <h2>Join Our Exclusive Circle</h2>
                  <p>
                    Subscribe now and elevate your fragrance journey with premium insights and offers.
                  </p>
                </motion.div>

                <motion.form 
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                  variants={itemVariants}
                >
                  <div className="input-group">
                    <motion.div 
                      className="input-wrapper"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="newsletter-input"
                      />
                      <motion.div 
                        className="input-focus"
                        initial={{ scaleX: 0 }}
                        whileFocus={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className={`subscribe-btn ${isSubmitting ? 'loading' : ''}`}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover={isSubmitting ? "loading" : "hover"}
                    whileTap="tap"
                    disabled={isSubmitting || !email}
                    animate={isSubmitting ? "loading" : "initial"}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          className="spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Become a Member</span>
                        <i className="fas fa-arrow-right"></i>
                      </>
                    )}
                  </motion.button>
                  
                  <motion.p 
                    className="privacy-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <i className="fas fa-shield-alt"></i>
                    We respect your privacy. No spam, unsubscribe anytime.
                  </motion.p>
                </motion.form>

                <motion.div 
                  className="quick-stats"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-item">
                    <i className="fas fa-bolt"></i>
                    <span>Instant Access</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-calendar-check"></i>
                    <span>Weekly Insights</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-award"></i>
                    <span>Premium Content</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;