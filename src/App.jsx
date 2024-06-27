import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/Routes.jsx';

function App() {

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
