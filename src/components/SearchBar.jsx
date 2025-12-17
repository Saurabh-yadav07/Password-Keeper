import "./SearchBar.css";

function SearchBar({ onSearch }) {
  return (
    <input
      className="search"
      placeholder="Search passwords..."
      onChange={e => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;