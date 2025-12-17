import { useParams } from "react-router-dom";
import useFetchProducts from "../utils/hooks/useFetchProducts";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import "../styles/CategoryProducts.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CategoryProducts() {
  const { categoryName } = useParams();
  const { products, loading, error } = useFetchProducts();
    const navigate = useNavigate();

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const filtered = products.filter(
    (p) => p.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="cat-container fade-in">

       <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
        <span>Back</span>
      </button>
      <h1 className="cat-title">{categoryName}</h1>

      <div className="cat-grid">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductItem key={p.id} product={p} />)
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
