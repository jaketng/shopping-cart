import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../contexts/CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <>
      <nav>
        <div className="nav-header">
          <Link to="/">
            <h1>MyStore</h1>
          </Link>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="cart-icon">
          <Link to="/cart">
            <ShoppingCart size={32} />{" "}
            <span className="cart-quantity">{cart.totalQuantity}</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
