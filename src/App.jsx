import { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";
import { CartProvider } from "./contexts/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <AppRoutes />
      </CartProvider>
    </>
  );
}

export default App;
