import "../styles/ThankYou.css";

function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Your order is confirmed. We’ll notify you once it ships.</p>

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
