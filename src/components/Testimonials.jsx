import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profile1 from "../assests/images.webp"
import profile2 from "../assests/images2.webp"
import profile3 from "../assests/images3.webp"

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      text: "The Midnight Rose perfume is absolutely divine! I receive compliments every time I wear it. The scent lasts all day and the packaging is exquisite.",
      author: "Sarah Johnson",
      location: "New York, USA",
      avatar:  profile1
    },
    {
      id: 2,
      text: "I've been using Ocean Breeze for my daily wear and it's become my signature scent. It's fresh but not overpowering, perfect for the office.",
      author: "Michael Chen",
      location: "London, UK",
      avatar:  profile2
    },
    {
      id: 3,
      text: "The quality of LuxeScents perfumes is unmatched. I've tried many luxury brands, but none have the depth and longevity of these fragrances.",
      author: "Isabella Rossi",
      location: "Milan, Italy",
      avatar:  profile3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <section className="testimonials section-padding" ref={ref} id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Stories from Our <span className="highlight">Delighted Customers</span></h2>
          <p>Discover why thousands of customers trust LuxeScents for their signature fragrances</p>
        </div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="testimonial-text">
                <p>
  <i className="fas fa-quote-left quote-icon"></i>
  {testimonial.text}
  <i className="fas fa-quote-right quote-icon"></i>
</p>

              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;