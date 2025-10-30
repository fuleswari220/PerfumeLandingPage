import React, { lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

// Components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const PerfumeCarousel = lazy(() => import('./components/PerfumeCarousel'));
const FeaturedProducts = lazy(() => import('./components/FeaturedProducts'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  return (
    <div className="App">
      <motion.div 
        className="background-scale"
        style={{ scale }}
      />
      <Suspense>
      <Header />
      
      {/* Add IDs to all sections for navigation */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="collections">
        <PerfumeCarousel />
      </section>
      
      <section id="shop">
        <FeaturedProducts />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="contact">
        <Newsletter />
        <Footer />
      </section>
      </Suspense>
    </div>
  );
}

export default App;