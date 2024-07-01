import React from "react";
import { useCart } from "../contexts/CartContext.jsx";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.items.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2>{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total Quantity: {cart.totalQuantity}</h2>
            <button onClick={handleClear}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
