import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import midnightrose from "../assests/Midnight Rose.jpg"
import oceanbreeze from "../assests/Ocean Breeze.jpg"
import goldenamber from "../assests/Golden Amber.jpg"
import velvetorchid from "../assests/Velvet Orchid.jpg"
import cirtrus from "../assests/Citrus Bloom.jpg"
import mysticwood from "../assests/Mystic Woods.jpg"

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const cardsPerPage = 3;

  const products = [
    {
      id: 1,
      name: "Midnight Rose",
      description: "A captivating blend of dark roses, amber, and musk",
      price: "$89.99",
      image: midnightrose,
      category: "Floral",
      size: "100ml",
      rating: 4.8
    },
    {
      id: 2,
      name: "Ocean Breeze",
      description: "Fresh aquatic notes with hints of sea salt and driftwood",
      price: "$79.99",
      image: oceanbreeze,
      category: "Fresh",
      size: "100ml",
      rating: 4.6
    },
    {
      id: 3,
      name: "Golden Amber",
      description: "Warm and sensual with notes of vanilla, amber, and sandalwood",
      price: "$99.99",
      image: goldenamber,
      category: "Oriental",
      size: "100ml",
      rating: 4.9
    },
    {
      id: 4,
      name: "Velvet Orchid",
      description: "Luxurious orchid with woody notes",
      price: "$94.99",
      image: velvetorchid,
      category: "Floral",
      size: "100ml",
      rating: 4.7
    },
    {
      id: 5,
      name: "Citrus Bloom",
      description: "Zesty citrus with floral undertones",
      price: "$74.99",
      image: cirtrus,
      category: "Citrus",
      size: "50ml",
      rating: 4.5
    },
    {
      id: 6,
      name: "Mystic Woods",
      description: "Earthy woods with spicy accents",
      price: "$109.99",
      image: mysticwood,
      category: "Woody",
      size: "100ml",
      rating: 4.8
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products based on selected category
  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'Price: High to Low':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'Rating':
        return b.rating - a.rating;
      case 'Featured':
      default:
        return 0; // Keep original order for featured
    }
  });

  // Calculate pagination values
  const totalPages = Math.ceil(sortedProducts.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + cardsPerPage);

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
        ease: "easeOut"
      }
    }
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#d4af37",
      color: "white",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const filterButtonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#d4af37",
      color: "white",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="shop-section section-padding" id="shop" ref={ref}>
      <div className="container">
        <motion.div 
          className="shop-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Perfume Shop</h2>
          <p>Browse our complete collection of luxury fragrances</p>
          
          {/* Shop Filters - Now in single line */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="filters-container">
              {/* Category Filter */}
              <div className="filter-group">
                <span className="filter-label">Category:</span>
                <div className="filter-buttons">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter(category)}
                      variants={filterButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="filter-group">
                <span className="filter-label">Sort by:</span>
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="shop-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`${currentPage}-${selectedCategory}-${sortBy}`} // Re-trigger animation on any change
        >
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <motion.div
                key={product.id}
                className="shop-product-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Product Image */}
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <motion.button 
                      className="quick-view-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-eye"></i>
                      Quick View
                    </motion.button>
                  </div>
                  <div className="product-badges">
                    <span className="category-badge">{product.category}</span>
                    {product.rating >= 4.8 && <span className="featured-badge">Featured</span>}
                  </div>
                </div>

                {/* Product Info */}
                <div className="product-details">
                  <div className="product-meta">
                    <span className="product-size">{product.size}</span>
                    <div className="product-rating">
                      <i className="fas fa-star"></i>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <motion.button 
                      className="add-to-cart-shop"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-shopping-cart"></i>
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            // No products found message
            <motion.div 
              className="no-products"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-search"></i>
              <h3>No products found</h3>
              <p>Try selecting a different category or search term</p>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Pagination - Only show buttons when available */}
        {currentProducts.length > 0 && (
          <motion.div 
            className="shop-pagination"
            variants={paginationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Previous Button - Only show if not on first page */}
            {currentPage > 1 && (
              <motion.button
                className="pagination-btn pagination-prev"
                onClick={prevPage}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-chevron-left"></i>
                Previous
              </motion.button>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index + 1}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => goToPage(index + 1)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {index + 1}
              </motion.button>
            ))}

            {/* Next Button - Only show if not on last page */}
            {currentPage < totalPages && (
              <motion.button
                className="pagination-btn pagination-next"
                onClick={nextPage}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Next
                <i className="fas fa-chevron-right"></i>
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Page Info */}
        {currentProducts.length > 0 && (
          <motion.div 
            className="page-info"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            Showing {startIndex + 1}-{Math.min(startIndex + cardsPerPage, sortedProducts.length)} of {sortedProducts.length} products
            {selectedCategory !== 'All' && (
              <span className="filter-indicator"> in {selectedCategory}</span>
            )}
            <span className="page-indicator"> - Page {currentPage} of {totalPages}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;