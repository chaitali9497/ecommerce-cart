import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import "../styles/header.css";
import { useState } from "react";

function Header() {
  const cart = useSelector((state) => state.cart?.cart || []);
  const [openMenu, setOpenMenu] = useState(false);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="container header-flex">

        <Link to="/" className="logo-box">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="logo-text">ShoppyGlobe</h1>
        </Link>

        <div
          className="hamburger"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </div>

        <nav className={`nav ${openMenu ? "open" : ""}`}>
          <SearchBar className="mobile-search" />

          <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
          <Link to="/products" onClick={() => setOpenMenu(false)}>Products</Link>

          <Link to="/cart" onClick={() => setOpenMenu(false)}>
            Cart
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
