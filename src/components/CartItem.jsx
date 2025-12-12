import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/CartSlice";
import "../styles/cart.css";

 function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-left">
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
      </div>

      <div className="quantity-box">
        <button
          className="quantity-btn"
          onClick={() => dispatch(decreaseQty(item.id))}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          className="quantity-btn"
          onClick={() => dispatch(increaseQty(item.id))}
        >
          +
        </button>
      </div>

      <img src={item.thumbnail} alt={item.title} loading="lazy" />

      <button
        className="btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
