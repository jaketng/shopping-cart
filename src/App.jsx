import Navbar from "./components/Navbar.jsx";
import { useState, useEffect } from "react";
import AppRoutes from "./routes/Routes.jsx";
import { fetchCartData } from "./api/fakestoreApi.js";

function App() {
  const userId = 1;
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

  return (
    <>
      <Navbar cartQuantity={cart.length} />
      <AppRoutes />
    </>
  );
}

export default App;
