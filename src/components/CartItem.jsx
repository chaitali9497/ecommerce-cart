import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";
import "../styles/cartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
     
      <img src={item.thumbnail} alt={item.title} />

      
      <h3 className="title">{item.title}</h3>

      
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

     
      <button
        className="btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>

      
      <span className="price">
  ₹ {(Number(item.price) * item.quantity).toFixed(2)}
            </span>
    </div>
  );
}

export default CartItem;
