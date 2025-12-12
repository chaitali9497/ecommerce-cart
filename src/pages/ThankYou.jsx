import { useLocation } from "react-router-dom";
import "../styles/ThankYou.css";

function ThankYou() {
  const location = useLocation();
  const { orderId, cart, total } = location.state || {}; 

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">

        <h1>Thank You, Happy Shopping!</h1>
        <p>Your order is confirmed. We’ll notify you once it ships.</p>

        
        <div className="order-summary">
          <h2>Order Summary</h2>

          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Total Amount:</strong> ₹{total}</p>

          <div className="order-items">
            {cart?.map((item) => (
              <div className="order-item" key={item.id}>
                <img
                  src={item.thumbnail || item.images[0]}
                  alt={item.title}
                  className="order-item-img"
                />
                <div className="order-item-info">
                  <h3>{item.title}</h3>
                  <p>Qty: {item.quantity}</p>
                </div>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
