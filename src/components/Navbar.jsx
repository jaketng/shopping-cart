import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
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
            <ShoppingCart size={32} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
