import "../styles/Home.css";
import useFetchProducts from "../utils/hooks/useFetchProducts";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Home() {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState("");

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const grouped = products.reduce((acc, item) => {
    const cat = item.category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="home-container fade-in">

    
      <div className="home-search">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {Object.keys(grouped).map((cat) => {
        const filteredProducts = grouped[cat].filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div key={cat} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{cat}</h2>

              <Link to={`/category/${cat}`} className="view-more-btn">
                More →
              </Link>
            </div>

            <div className="home-grid">
              {filteredProducts.slice(0, 4).map((p) => (
                <ProductItem key={p.id} product={p} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
