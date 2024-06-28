import React, { useEffect, useState } from "react";
import { fetchCartData } from "../api/fakestoreApi";

const CartPage = ({ userId }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await fetchCartData(userId);
        setCart(cartData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cart || cart.length === 0) {
    return <p>No cart data found</p>;
  }

  // Render cart data if all conditions are met
  return (
    <>
      <h1>Cart Page</h1>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <p>User ID: {cartItem.userId}</p>
          <p>Date: {cartItem.date}</p>
          <ul>
            {cartItem.products.map((product, index) => (
              <li key={index}>
                <p>Product ID: {product.productId}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CartPage;
