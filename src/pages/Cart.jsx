import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce(
    (sum, item) =>(sum + item.price * item.quantity),
    0
  ).toFixed(2);



  return (
   <div className="container cart-page">
  <h1 className="cart-title">Your Cart</h1>

  {cart.length === 0 && (
    <p className="empty-cart">No items added</p>
  )}


      <div className="cart-items">
        {cart.map((c) => (
          <CartItem key={c.id} item={c} />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="checkout-box-wrapper">
          <div className ="checkout-total">
          <h2>Total: ₹{Number(total).toFixed(2)}</h2>
         </div>
         <div className = "checkout-btn">
          <Link to="/checkout">
            <button className="btn" >Checkout</button>
          </Link>
           </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
