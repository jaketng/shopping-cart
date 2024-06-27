
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
      <div>
        <button>-</button>
        <input type="number" defaultValue="1" />
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
