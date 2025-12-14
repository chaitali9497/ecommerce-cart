import "../styles/ProductItem.css";
import { Link } from "react-router-dom";
import HighlightText from "./HighlightText";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../redux/cartSlice";

function ProductItem({ product, search }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-grid">
      <div className="product-card">
        <Link to={`/product/${product.id}`} className="product-link">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />

          <div className="product-content">
            <h2 className="product-title">
              <HighlightText text={product.title} search={search} />
            </h2>
          </div>
        </Link>

        <p className="product-price">₹{product.price}</p>

        
        {!cartItem && (
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </button>
        )}

        {cartItem && (
          <div
            className="cart-action-row"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <button className="btn added" disabled>
              Added
            </button>

            <div className="quantity-box">
              <button
                className="quantity-btn"
                onClick={() => dispatch(decreaseQty(cartItem.id))}
                disabled={cartItem.quantity === 1}
              >
                −
              </button>

              <span>{cartItem.quantity}</span>

              <button
                className="quantity-btn"
                onClick={() => dispatch(increaseQty(cartItem.id))}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
