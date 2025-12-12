import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import {useNavigate} from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

   const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/thank-you");
  };

  return (
    <div className="container">
      <h1 style={{ margin: "20px 0" }}>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Total Amount: ₹{total}</h3>
          <p>This is a dummy checkout form. You can style it as needed.</p>

          <button
            className="btn"
            style={{ marginTop: "20px" }}
            onClick={handleCheckout}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
