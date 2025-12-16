import { useState } from "react";
import "../styles/Filter.css";

function FilterBar({ categories = [], onFilter }) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleApply = () => {
    onFilter({ category, price });
  };

  return (
    <div className="filter-box">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Price</option>
        <option value="low">₹0 – ₹499</option>
        <option value="mid">₹500 – ₹999</option>
        <option value="high">₹1000+</option>
      </select>

      <button className="filter-btn" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}

export default FilterBar;
