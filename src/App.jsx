import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import AppRoutes from "./routes/Routes.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
