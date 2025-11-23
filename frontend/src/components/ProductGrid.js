import React, { useState, useEffect } from 'react';
import './ProductGrid.css';

const ProductGrid = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Reliable product images with multiple fallbacks
  const sampleProducts = [
    // Electronics
    {
      id: 1,
      name: 'Apple iPhone 14 Pro',
      price: 119999,
      originalPrice: 129999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 1247,
      description: 'Latest iPhone with Dynamic Island'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 89999,
      originalPrice: 99999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 892,
      description: 'Powerful Android smartphone'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      price: 114999,
      originalPrice: 119999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 567,
      description: 'Supercharged by M2 chip'
    },
    {
      id: 4,
      name: 'Sony Headphones',
      price: 24999,
      originalPrice: 29999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 1234,
      description: 'Noise canceling headphones'
    },
    {
      id: 5,
      name: 'Canon DSLR Camera',
      price: 45999,
      originalPrice: 49999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 345,
      description: 'Professional photography camera'
    },

    // Fashion
    {
      id: 6,
      name: 'Nike Air Jordan 1',
      price: 12999,
      originalPrice: 14999,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      rating: 4.5,
      reviews: 456,
      description: 'Classic basketball shoes'
    },
    {
      id: 7,
      name: 'Adidas Ultraboost',
      price: 15999,
      originalPrice: 17999,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 789,
      description: 'Running shoes with cushioning'
    },
    {
      id: 8,
      name: 'Levi\'s Jeans',
      price: 2999,
      originalPrice: 3999,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
      rating: 4.2,
      reviews: 123,
      description: 'Classic denim jeans'
    },
    {
      id: 9,
      name: 'Zara T-Shirt',
      price: 999,
      originalPrice: 1499,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      rating: 4.1,
      reviews: 89,
      description: 'Cotton casual t-shirt'
    },

    // Home & Kitchen
    {
      id: 10,
      name: 'Wooden Study Table',
      price: 7999,
      originalPrice: 9999,
      category: 'Home',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      rating: 4.3,
      reviews: 156,
      description: 'Modern study table'
    },
    {
      id: 11,
      name: 'Sofa Set',
      price: 25999,
      originalPrice: 29999,
      category: 'Home',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      rating: 4.5,
      reviews: 267,
      description: '3-seater sofa set'
    },
    {
      id: 12,
      name: 'Kitchen Knife Set',
      price: 3999,
      originalPrice: 4999,
      category: 'Home',
      image: 'https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?w=400&h=300&fit=crop',
      rating: 4.4,
      reviews: 189,
      description: 'Professional kitchen knives'
    },

    // Beauty
    {
      id: 13,
      name: 'Premium Makeup Kit',
      price: 2999,
      originalPrice: 3999,
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      rating: 4.3,
      reviews: 234,
      description: 'Complete makeup collection'
    },
    {
      id: 14,
      name: 'Hair Dryer',
      price: 1999,
      originalPrice: 2499,
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1522338147998-18ce8700361e?w=400&h=300&fit=crop',
      rating: 4.2,
      reviews: 167,
      description: 'Professional hair styling tool'
    },

    // Sports
    {
      id: 15,
      name: 'Yoga Mat',
      price: 1499,
      originalPrice: 1999,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      rating: 4.4,
      reviews: 178,
      description: 'Premium yoga mat'
    },
    {
      id: 16,
      name: 'Dumbbell Set',
      price: 4999,
      originalPrice: 5999,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 289,
      description: 'Adjustable weight dumbbells'
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Using sample product data');
        setProducts(sampleProducts);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product => {
    if (searchQuery === '') {
      return true;
    }
    
    if (searchQuery === 'Home') {
      return product.category === 'Home';
    }
    
    if (searchQuery === 'Offers') {
      return product.originalPrice > product.price;
    }
    
    if (searchQuery === 'All Products') {
      return true;
    }
    
    return product.category === searchQuery || 
           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating) => {
    return (
      <div className="product-rating">
        <span className="stars">
          {'★'.repeat(Math.floor(rating))}
          {'☆'.repeat(5 - Math.floor(rating))}
        </span>
        <span className="rating-text">({rating})</span>
      </div>
    );
  };

  // Better image error handling
  const handleImageError = (e, productName) => {
    console.log(`Image failed to load for: ${productName}`);
    e.target.src = `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(productName)}`;
    e.target.alt = `${productName} - Image not available`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <div className="container">
        {/* Category Header */}
        {searchQuery && (
          <div className="category-header">
            <h2>
              {searchQuery === 'Offers' ? 'Special Offers' : 
               searchQuery === 'Home' ? 'Home & Kitchen' : 
               searchQuery}
            </h2>
            <p>{filteredProducts.length} products found</p>
          </div>
        )}

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => handleImageError(e, product.name)}
                />
                {product.originalPrice > product.price && (
                  <span className="discount-badge">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  {renderStars(product.rating)}
                  <span className="review-count">({product.reviews})</span>
                </div>
                
                <div className="product-pricing">
                  <span className="current-price">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in {searchQuery} category.</p>
            <p>Try browsing other categories!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;