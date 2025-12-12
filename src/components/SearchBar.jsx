import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/CartSlice";
import "../styles/SearchBar.css";

 function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="search-input"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
}
export default SearchBar;
