import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-section">
          <h2>ShoppyGlobby</h2>
          <p>Your one-stop shop for everything awesome.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShoppyGlobby. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
