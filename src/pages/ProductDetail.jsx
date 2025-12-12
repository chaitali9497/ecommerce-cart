import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "../styles/ProductDetails.css";
import useFetchProducts from "../utils/hooks/useFetchProducts";

 function ProductDetail() {
  const dispatch = useDispatch();
  const { products } = useFetchProducts();

 
  const id = window.location.pathname.split("/").pop();
  const product = products.find((p) => p.id == id);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="detail-box">
        <img src={product.thumbnail} alt={product.title} />

        <div>
          <h1 className="detail-title">{product.title}</h1>
          <p>{product.description}</p>
          <h2 className="detail-price">₹{product.price}</h2>

          <button className="btn" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
