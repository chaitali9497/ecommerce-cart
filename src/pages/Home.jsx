import "../styles/Home.css";
import useFetchProducts from "../utils/hooks/useFetchProducts";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


function Home() {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  
  const grouped = products.reduce((acc, item) => {
    const cat = item.category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  let hasResults = false;

  return (
    <>
    <div className="home-container fade-in">

      
      <div className="home-search">
        <SearchBar
         search={search}
         setSearch={setSearch}
         products={products}
             />
      </div>

    {debouncedSearch && (
  <button
    className="floating-back-btn"
    onClick={() => {
      setSearch("");
      setDebouncedSearch("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    title="Back to Home"
  >
    <FaArrowLeft />
  </button>
)}

      {Object.keys(grouped).map((cat) => {
        const filteredProducts = grouped[cat].filter((p) => {
          if (!debouncedSearch) return true;

          const term = debouncedSearch.toLowerCase();

          return (
            p.title.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term) ||
            (p.description &&
              p.description.toLowerCase().includes(term))
          );
        });

        if (filteredProducts.length === 0) return null;

        hasResults = true;

        return (
          <div key={cat} className="category-section">
          {!debouncedSearch && (
  <div className="category-header">
    <h2 className="category-title">{cat}</h2>

    <Link
  to={`/category/${cat}`}
  className="view-more-float"
  title={`View more ${cat}`}
>
  <FaArrowRight />
</Link>
  </div>
)}     

  

 <div className="home-grid">
              {(debouncedSearch
                ? filteredProducts
                : filteredProducts.slice(0, 4)
              ).map((p) => (
                <ProductItem
                  key={p.id}
                  product={p}
                  search={debouncedSearch}
                />
              ))}
            </div>
          </div>
        );
      })}

      
      {debouncedSearch && !hasResults && (
        <div className="no-results">
          <h3>No products found</h3>
          <p>Try searching with different keywords</p>
        </div>
      )}
      
    </div>
    <Footer/>
    </>
  );
}

export default Home;
