import React, { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", quantity: 1, price: 50 },
    { id: 2, name: "Product B", quantity: 2, price: 30 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(newQuantity || 0) } : item
    );
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 10;
  const total = subtotal + delivery;

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="checkout-grid">
        <form className="form">
        <h2>Contact Information</h2>
<div className="form-group">
  <input type="text" placeholder="Full Name" required />
  <input type="email" placeholder="Email Address" required />
  <input type="tel" placeholder="Phone Number" required />
</div>
 
          <h2>Delivery Information</h2>
          <input type="text" placeholder="Address Line 1" required />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Zip / Postal Code" required />
          <select required>
            <option value="">Select Country</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>Europe</option>
            <option>UK</option>
            <option>UAE</option>
            <option>Peru</option>
          </select>
          <textarea placeholder="Delivery Instructions"></textarea>

          <h2>Payment Details</h2>
          <input type="text" placeholder="Cardholder Name" required />
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Expiry Date (MM/YY)" required />
          <input type="text" placeholder="CVV" required />
          
          <div className="checkbox-wrapper">
  <input type="checkbox" id="save-card" />
  <label htmlFor="save-card" className="checkbox-label">Save this card for future purchases</label>
</div>


          <button type="submit">Place Order</button>
        </form>

        <div className="cart">
          <h2>Cart Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <span>Rs.{item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="totals">
            <div>Subtotal: Rs.{subtotal}</div>
            <div>Delivery: Rs.{delivery}</div>
            <div><strong>Total: Rs.{total}</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
