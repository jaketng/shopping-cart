import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value >= 0 ? value : 0);
  };

  const handleAddToCart = () => {};

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} onChange={handleInput} min="1" />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        + Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
