import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaBars,FaTimes,FaHome,FaBoxOpen,FaShoppingCart,} from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { useState, useEffect } from "react";

function Header() {
  const cart = useSelector((state) => state.cart?.cart || []);
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-flex">

        
          <Link to="/" className="logo-box" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="logo-text">
              <i>ShoppyGlobe</i>
            </h1>
          </Link>

        
          <nav className={`nav ${openMenu ? "open" : ""}`}>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaHome className="nav-icon" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaBoxOpen className="nav-icon" />
              <span>Products</span>
            </NavLink>

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link cart-link active" : "nav-link cart-link"
              }
            >
              <FaShoppingCart className="nav-icon" />
              <span>Cart</span>

              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </NavLink>
          </nav>

        
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {openMenu && <div className="nav-overlay" onClick={closeMenu} />}
    </header>
  );
}

export default Header;
