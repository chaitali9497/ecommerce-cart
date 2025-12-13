import { useEffect, useMemo, useState ,useRef} from "react";
import { FaTimes, FaHistory,FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";

const STORAGE_KEY = "recent_searches";

function SearchBar({ search, setSearch, products }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recent, setRecent] = useState([]);
  const wrapperRef = useRef(null);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setRecent(saved);
  }, []);

  useEffect(() => {
  function handleClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);


  
  const saveSearch = (value) => {
    if (!value.trim()) return;

    const updated = [
      value,
      ...recent.filter((s) => s !== value),
    ].slice(0, 5);

    setRecent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  
  const suggestions = useMemo(() => {
    if (!search) return [];

    const term = search.toLowerCase();

    const matches = products.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );

    return [
      ...new Set(matches.flatMap((p) => [p.title, p.category])),
    ].slice(0, 6);
  }, [search, products]);

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon-left" />
        <input
          type="text"
          placeholder="Search products (beauty, lipstick, shoes...)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveSearch(search);
              setShowSuggestions(false);
            }
          }}
          className="search-input"
        />

        
        {search && (
          <button
            className="clear-btn"
            onClick={() => {
              setSearch("");
              setShowSuggestions(false);
            }}
          >
            <FaTimes />
          </button>
        )}
      </div>

    
      {showSuggestions && (
        <div className="search-suggestions">
          
          {recent.length > 0 && !search && (
            <>
              <div className="suggestion-title">Recent</div>
              {recent.map((item, i) => (
                <div
                  key={i}
                  className="suggestion-item"
                  onClick={() => {
                    setSearch(item);
                    setShowSuggestions(false);
                  }}
                >
                  <FaHistory />
                  <span>{item}</span>
                </div>
              ))}
            </>
          )}

         
          {suggestions.map((item, i) => (
            <div
              key={i}
              className="suggestion-item"
              onClick={() => {
                setSearch(item);
                saveSearch(item);
                setShowSuggestions(false);
              }}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
