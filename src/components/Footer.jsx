import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    shop: ['All Fragrances', "Women's Collection", "Men's Collection", 'Unisex Scents', 'Gift Sets', 'Limited Editions'],
    service: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Store Locator', 'Fragrance Guide', 'Custom Scents'],
    company: ['About Us', 'Our Story', 'Sustainability', 'Careers', 'Press', 'Privacy Policy'],
    contact: [
      { icon: 'map-marker-alt', text: '123 Fragrance Ave, Paris, France' },
      { icon: 'phone', text: '+91-8371047875' },
      { icon: 'envelope', text: 'fuleswari220@gmail.com' },
      { icon: 'clock', text: 'Mon-Fri: 9AM-6PM' }
    ]
  };

  const socialIcons = [
    { name: 'facebook-f', color: '#1877F2' },
    { name: 'instagram', color: '#E4405F' },
    { name: 'twitter', color: '#1DA1F2' },
    { name: 'pinterest', color: '#BD081C' },
    { name: 'tiktok', color: '#000000' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const columnVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const floatingOrbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    delay: i * 0.2,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 100
  }));

  return (
    <footer className="footer">
      {/* Background Elements */}
      <div className="footer-bg-elements">
        {floatingOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="floating-orb"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}%`
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: -100,
              rotate: 360
            }}
            transition={{
              delay: orb.delay,
              duration: orb.duration,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div 
            className="footer-column brand-column"
            variants={columnVariants}
          >
            <motion.div 
              className="brand-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>LuxeScents</h3>
              <div className="logo-decoration"></div>
            </motion.div>
            <p className="brand-description">
              Crafting unforgettable fragrances since 2010. Experience luxury in every bottle with our 
              meticulously curated scents that tell your unique story.
            </p>
            
            <div className="social-links">
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={social.name}
                  href="#"
                  className="social-link"
                  custom={index}
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ '--social-color': social.color }}
                >
                  <i className={`fab fa-${social.name}`}></i>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div 
              className="trust-badges"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="trust-badge">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Payment</span>
              </div>
              <div className="trust-badge">
                <i className="fas fa-truck"></i>
                <span>Free Shipping</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Shop Links */}
          <motion.div 
            className="footer-column"
            variants={columnVariants}
          >
            <h3>Shop Fragrances</h3>
            <ul>
              {footerLinks.shop.map((link, index) => (
                <motion.li 
                  key={link}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 10, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#">
                    <i className="fas fa-chevron-right"></i>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div 
            className="footer-column"
            variants={columnVariants}
          >
            <h3>Customer Service</h3>
            <ul>
              {footerLinks.service.map((link, index) => (
                <motion.li 
                  key={link}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 10, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#">
                    <i className="fas fa-chevron-right"></i>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            className="footer-column"
            variants={columnVariants}
          >
            <h3>Company</h3>
            <ul>
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 10, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#">
                    <i className="fas fa-chevron-right"></i>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-column contact-column"
            variants={columnVariants}
          >
            <h3>Get In Touch</h3>
            <ul>
              {footerLinks.contact.map((item, index) => (
                <motion.li 
                  key={item.text}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 10, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-item">
                    <motion.i 
                      className={`fas fa-${item.icon}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    ></motion.i>
                    <span>{item.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Payment Methods */}
            <motion.div 
              className="payment-methods"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>We Accept</h4>
              <div className="payment-icons">
                {['cc-visa', 'cc-mastercard', 'cc-amex', 'cc-paypal', 'cc-apple-pay'].map((icon, index) => (
                  <motion.i 
                    key={icon}
                    className={`fab fa-${icon}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -2 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="copyright-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="copyright-content">
            <p>&copy; 2025 LuxeScents. All rights reserved.</p>
            <div className="legal-links">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ color: '#d4af37', y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;