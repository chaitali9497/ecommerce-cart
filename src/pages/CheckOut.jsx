import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);

  const subtotal =Math.floor(cart.reduce((s, i) => s + i.price * i.quantity, 0));
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const shipping = totalItems > 0 ? 50 : 0;
  const discount = totalItems >= 3 ? 20 : 0;
  const finalTotal = subtotal + shipping - discount;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  const validate = () => {
    if (form.name.trim().length < 3) {
      toast.error("Enter a valid full name");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!/^[0-9]{10}$/.test(form.phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }
    if (!form.city.trim()) {
      toast.error("City is required");
      return false;
    }
    if (!form.state.trim()) {
      toast.error("State is required");
      return false;
    }
    if (!/^[0-9]{6}$/.test(form.zip)) {
      toast.error("ZIP code must be 6 digits");
      return false;
    }

    return true;
  };

  const handleCheckout = () => {
    if (!validate()) return;

toast.success("Order placed successfully!");

setTimeout(() => {
  const orderId = "ORD-" + Date.now();
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  navigate("/thank-you", {
    state: {
      cart,
      total,
      orderId
    }
  });

  dispatch(clearCart());
}, 700);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-container">

     
      <div className="checkout-left">
        <h2>Checkout</h2>

        <div className="checkout-form">
          <input name="name" type="text" placeholder="Full name" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email address" onChange={handleChange} />
          <input name="phone" type="text" placeholder="Phone number" onChange={handleChange} />

          <div className="row">
            <input name="city" type="text" placeholder="City" onChange={handleChange} />
            <input name="state" type="text" placeholder="State" onChange={handleChange} />
            <input name="zip" type="text" placeholder="ZIP Code" onChange={handleChange} />
          </div>
        </div>
      </div>

     
      <div className="checkout-right">
        <h2>Order Details</h2>

        <div className="order-items">
          {cart.map((item) => (
             <div key={item.id} className="order-item">
      <img
        src={item.thumbnail || item.images[0]}
        alt={item.title}
        className="order-item-img"
      />

      <span className="order-item-text">
        <h3>{item.title}</h3>
        <p>Qty: {item.quantity}</p>
      </span>

      <span>₹{item.price * item.quantity}</span>
    
    </div>
          ))}
        </div>

        <h3>Order Summary</h3>

        <p><span>Items</span><span>{totalItems}</span></p>
        <p><span>Subtotal</span><span>₹{subtotal} . 00</span></p>
        <p><span>Shipping</span><span>₹{shipping}</span></p>
        <p><span>Discount</span><span>-₹{discount} . 00</span></p>

        <h2 className="summary-total">
          <span>Total</span>
          <span>₹{finalTotal}. 00</span>
        </h2>

        <button className="order-btn" onClick={handleCheckout}>
         Order Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
