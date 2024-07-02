import React from "react";
import { useCart } from "../contexts/CartContext.jsx";
import CartProductCard from "../components/CartProductCard.jsx";

const CartPage = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-products">
        {cart.items.length > 0 ? (
          cart.items.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cart.items.length > 0 && (
        <div className="cart-summary">
          <p>Total Quantity: {cart.totalQuantity}</p>
          <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
