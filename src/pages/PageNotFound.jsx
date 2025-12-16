import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! Page not found</p>

      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
