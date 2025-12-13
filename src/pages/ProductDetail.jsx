import { useDispatch, useSelector } from "react-redux";
import {addToCart,increaseQty,decreaseQty} from "../redux/CartSlice";
import "../styles/ProductDetails.css";
import useFetchProducts from "../utils/hooks/useFetchProducts";

function ProductDetail() {
  const dispatch = useDispatch();
  const { products } = useFetchProducts();

  const cartItems = useSelector((state) => state.cart.cart);

  const id = window.location.pathname.split("/").pop();
  const product = products.find((p) => p.id == id);

  const cartItem = cartItems.find((item) => item.id == id);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="detail-box">
        <img src={product.thumbnail} alt={product.title} />

        <div>
          <h1 className="detail-title">{product.title}</h1>
          <p>{product.description}</p>
          <h2 className="detail-price">₹{product.price}</h2>

          
          {!cartItem && (
            <button
              className="btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}

        
          {cartItem && (
  <div className="cart-action-row">
    <button className="btn added" disabled>
      Added to Cart
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
    </div>
  );
}

export default ProductDetail;
