import { useState } from "react";
import { addToCart } from "../api/fakestoreApi";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInput = (e) => {
    const value = e.target.value.replace(/^0+(?!$)/, "");
    const parsedValue = parseInt(value, 10);
    setQuantity(Number.isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(product.id, quantity);
      onAddToCart(quantity);
      setQuantity(0);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
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
      <button onClick={handleAddToCart} className="add-to-cart-button">
        + Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
