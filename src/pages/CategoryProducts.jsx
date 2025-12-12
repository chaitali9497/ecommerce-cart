import { useParams } from "react-router-dom";
import useFetchProducts from "../utils/hooks/useFetchProducts";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";

function CategoryProducts() {
  const { categoryName } = useParams();
  const { products, loading, error } = useFetchProducts();

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const filtered = products.filter(
    (p) => p.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="home-container fade-in">
      <h1 className="home-title">{categoryName}</h1>

      <div className="home-grid">
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
