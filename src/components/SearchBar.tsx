import React, { useState } from "react";
import './SearchBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


// interface SearchBarProps {
//   onSearch: (username: string) => void;
// }

const SearchBar: React.FC<{ onSearch: (username: string) => void }> = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // this will help Prevent page refresh
    if (username.trim()) {
      onSearch(username); // Callings the search function here
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="search-container">
      <div className="search-cont">
      <span><FontAwesomeIcon className="search-icon"
        icon={faSearch}
      /></span>
       <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input   rounded-md focus:outline-none"
      />
      </div>
      <button type="submit" className="search-button">Search</button>
    </form>
    </div>
  );
};

export default SearchBar;