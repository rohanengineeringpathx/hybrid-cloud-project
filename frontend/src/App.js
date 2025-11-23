import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Login from './components/Login';
import HeroBanner from './components/HeroBanner';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Show added to cart notification
    alert(`✅ ${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemsCount={getTotalItems()}
        user={user}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="main-content">
        {currentView === 'home' && (
          <>
            <HeroBanner />
            <ProductGrid 
              addToCart={addToCart} 
              searchQuery={searchQuery}
            />
          </>
        )}
        
        {currentView === 'products' && (
          <ProductGrid 
            addToCart={addToCart} 
            searchQuery={searchQuery}
          />
        )}
        
        {currentView === 'cart' && (
          <Cart 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
          />
        )}
        
        {currentView === 'login' && (
          <Login setUser={setUser} setCurrentView={setCurrentView} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;