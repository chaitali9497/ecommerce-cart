import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaHome, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/header.css";
import { useState, useEffect } from "react";

function Header() {
  const cart = useSelector((state) => state.cart?.cart || []);
  const [openMenu, setOpenMenu] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  return (
    <header className="header">
      <div className="container header-flex">
        
        <Link to="/" className="logo-box" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="logo-text">
            <i>ShoppyGlobe</i>
          </h1>
        </Link>

       
        <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      
      {openMenu && <div className="nav-overlay" onClick={closeMenu} />}

      
      <nav className={`nav ${openMenu ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu} className="nav-link">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>

        <Link to="/products" onClick={closeMenu} className="nav-link">
          <FaBoxOpen className="nav-icon" />
          <span>Products</span>
        </Link>

        <Link to="/cart" onClick={closeMenu} className="nav-link cart-link">
          <FaShoppingCart className="nav-icon" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
