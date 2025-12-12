import { Link } from "react-router-dom";
import "../styles/ProductItem.css";

 function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />

      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">₹{product.price}</p>
    </Link>
  );
}
export default ProductItem;
