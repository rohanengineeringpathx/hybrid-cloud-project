import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log('API not connected, showing sample data');
        setProducts([
          { id: 1, name: 'MacBook Pro', price: 1299, category: 'Electronics', image: '💻', description: 'Powerful laptop for professionals' },
          { id: 2, name: 'iPhone 14', price: 799, category: 'Electronics', image: '📱', description: 'Latest smartphone with advanced features' },
          { id: 3, name: 'Programming Book', price: 29, category: 'Books', image: '📚', description: 'Learn modern web development' },
          { id: 4, name: 'Coffee Mug', price: 15, category: 'Home', image: '☕', description: 'Perfect for your morning coffee' },
          { id: 5, name: 'Wireless Headphones', price: 199, category: 'Electronics', image: '🎧', description: 'High-quality sound experience' },
          { id: 6, name: 'Desk Lamp', price: 45, category: 'Home', image: '💡', description: 'Modern LED desk lamp' }
        ]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="products-header">
        <h2>Featured Products</h2>
        <p>Discover our amazing collection of products</p>
        
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="product-emoji">{product.image}</span>
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <span className="product-price">${product.price}</span>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;