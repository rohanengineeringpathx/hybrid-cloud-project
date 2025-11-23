import React from 'react';
import './Header.css';

const Header = ({ currentView, setCurrentView, cartItemsCount, user, searchQuery, setSearchQuery }) => {
  
  const handleNavClick = (category) => {
    setCurrentView('products');
    // Category filter set karenge through search query
    if (category === 'Home') {
      setSearchQuery('');
    } else {
      setSearchQuery(category);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <div className="logo" onClick={() => setCurrentView('home')}>
              <span className="logo-icon">🛍️</span>
              <span className="logo-text">CloudBazaar</span>
            </div>
          </div>

          <div className="header-center">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <span className="search-icon">🔍</span>
              </button>
            </div>
          </div>

          <div className="header-right">
            <button 
              className="header-btn"
              onClick={() => setCurrentView('login')}
            >
              <span className="btn-icon">👤</span>
              <span className="btn-text">{user ? user.name : 'Login'}</span>
            </button>

            <button 
              className="header-btn cart-btn"
              onClick={() => setCurrentView('cart')}
            >
              <span className="btn-icon">🛒</span>
              <span className="btn-text">Cart</span>
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <button 
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('Home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentView === 'products' && searchQuery === '' ? 'active' : ''}`}
            onClick={() => handleNavClick('')}
          >
            All Products
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Electronics')}
          >
            Electronics
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Fashion')}
          >
            Fashion
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Home')}
          >
            Home & Kitchen
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Beauty')}
          >
            Beauty
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Sports')}
          >
            Sports
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('Offers')}
          >
            Offers
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;