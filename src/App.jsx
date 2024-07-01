import { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <AppRoutes handleAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
