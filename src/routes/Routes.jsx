import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

const AppRoutes = ({ handleAddToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/shop"
        element={<ShopPage handleAddToCart={handleAddToCart} />}
      />
      <Route path="/cart" element={<CartPage userId={1} />} />
    </Routes>
  );
};

export default AppRoutes;
