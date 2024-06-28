import { Link } from "react-router-dom";
//import backgroundImage from "./path-to-your-image.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>HOME PAGE</h1>
      <Link to="/shop">
        <button className="shop-now-button">Shop Now</button>
      </Link>
    </div>
  );
};

export default HomePage;
