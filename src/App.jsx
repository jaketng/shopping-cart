import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/Routes.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
