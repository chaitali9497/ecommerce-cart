import "../styles/ProductItem.css";
import { Link } from "react-router-dom";
import HighlightText from "./HighlightText";

function ProductItem({ product, search }) {
  return (
    <div className="product-grid ">
    <Link to={`/product/${product.id}`} className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h2 className="product-title">
        <HighlightText text={product.title} search={search} />
      </h2>

      <p className="product-price">₹{product.price}</p>
    </Link>
    </div>
  );
}

export default ProductItem;
