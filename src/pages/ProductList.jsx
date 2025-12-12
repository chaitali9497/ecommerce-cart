import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";
import FilterBar from "../components/Filter";
import useFetchProducts from "../utils/hooks/useFetchProducts";
import "../styles/productList.css";

function ProductList() {
  const { products, loading } = useFetchProducts();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  const handleFilter = ({ search, category, price }) => {
    let temp = [...products];

    
    if (search) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

   
    if (category) {
      temp = temp.filter((p) => p.category === category);
    }

  
    if (price === "low") temp = temp.filter((p) => p.price <= 499);
    if (price === "mid") temp = temp.filter((p) => p.price >= 500 && p.price <= 999);
    if (price === "high") temp = temp.filter((p) => p.price >= 1000);

    setFiltered(temp);
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      <h1>All Products</h1>

      <FilterBar
        categories={[...new Set(products.map((p) => p.category))]}
        onFilter={handleFilter}
      />

      <div className="product-grid">
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
