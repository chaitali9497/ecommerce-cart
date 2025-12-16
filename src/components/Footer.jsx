import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-section">
          <h2>ShoppyGlobby</h2>
          <p>Your one-stop shop for everything awesome.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="nav-list">
      <li onClick={() => navigate("/")}>Home</li>
      <li onClick={() => navigate("/products")}>Products</li>
      <li onClick={() => navigate("/cart")}>Cart</li>
     
    </ul>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <FaTwitter />
  </a>
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
