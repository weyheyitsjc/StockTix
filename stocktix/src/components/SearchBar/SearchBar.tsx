import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); 
  };

  const handleSearchClick = () => {
    onSearch(query); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search events, cities"
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-icon" onClick={handleSearchClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;