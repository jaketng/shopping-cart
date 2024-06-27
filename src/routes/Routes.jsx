import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ShopPage from '../pages/ShopPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
};

export default AppRoutes;