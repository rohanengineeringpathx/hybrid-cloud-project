import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDeliveryCharge = () => {
    return getTotalPrice() > 499 ? 0 : 40;
  };

  const getTotalAmount = () => {
    return getTotalPrice() + getDeliveryCharge();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your Amazon Cart is empty</h2>
        <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
        <button className="continue-shopping">Continue shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <div className="cart-layout">
          <div className="cart-items-section">
            <div className="cart-header">
              <h1>Shopping Cart</h1>
              <span className="items-count">Price</span>
            </div>
            
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/100x100/667eea/white?text=${encodeURIComponent(item.name.substring(0, 2))}`;
                      }}
                    />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <p className="item-instock">In stock</p>
                    <p className="item-delivery">Earliest delivery: <strong>Tomorrow</strong></p>
                    
                    <div className="item-actions">
                      <div className="quantity-selector">
                        <label>Qty:</label>
                        <select 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="action-buttons">
                        <button 
                          className="action-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          Delete
                        </button>
                        <button className="action-btn">Save for later</button>
                        <button className="action-btn">See more like this</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="item-price">
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-subtotal">
              <strong>Subtotal ({cartItems.length} items): {formatPrice(getTotalPrice())}</strong>
            </div>
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <div className="summary-content">
                <div className="total-line">
                  <span>Subtotal ({cartItems.length} items):</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                
                <div className="total-line">
                  <span>Delivery Charges:</span>
                  <span>
                    {getDeliveryCharge() === 0 ? (
                      <span style={{color: '#067D62'}}>FREE</span>
                    ) : (
                      formatPrice(getDeliveryCharge())
                    )}
                  </span>
                </div>
                
                {getDeliveryCharge() === 0 && (
                  <div className="free-delivery">
                    🎉 Your order is eligible for FREE Delivery
                  </div>
                )}
                
                <div className="total-line grand-total">
                  <span><strong>Total:</strong></span>
                  <span><strong>{formatPrice(getTotalAmount())}</strong></span>
                </div>
                
                <div className="savings-notice">
                  You will save ₹{formatPrice(cartItems.reduce((total, item) => 
                    total + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
                  )).replace('₹', '')} on this order
                </div>
              </div>
              
              <button className="proceed-checkout">
                Proceed to Buy
              </button>
              
              <div className="secure-payment">
                <span>🔒</span>
                <span>Your payment is secure and encrypted</span>
              </div>
            </div>
            
            <div className="additional-options">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;