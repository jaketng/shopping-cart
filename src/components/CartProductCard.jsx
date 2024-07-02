import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const CartProductCard = ({ product }) => {
  const { updateCartQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartQuantity(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartQuantity(product.id, newQuantity);
    }
  };

  const handleInput = (e) => {
    const value = e.target.value.replace(/^0+(?!$)/, "");
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setQuantity(parsedValue);
      updateCartQuantity(product.id, parsedValue);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-product-card">
      <img src={product.image} alt={product.title} />
      <div className="cart-product-details">
        <h3>{product.title}</h3>
        <div className="cart-product-controls">
          <p>Price: ${product.price}</p>
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <input
              type="number"
              value={quantity === 0 ? "" : quantity}
              onChange={handleInput}
              min="1"
            />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
