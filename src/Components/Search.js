import React, { useState, useContext } from 'react';
import "./Styles/Search.css";
import { AppContext } from '../Contexts/AppContext';

const Search = () => {
  const { handleGlobalSearchData, handleCategory } = useContext(AppContext);
  const [searchApps, setSearchApps] = useState("");

  function handleSearch(e) {
    const searchtype = e.target.value;
    setSearchApps(searchtype);
    handleGlobalSearchData(searchtype);
  }

  return (
    <div className='search-container'>
      <div className='search'>
        <div className="search-logo-heading">
          <h1>App Store</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder='Search...'
            value={searchApps}
            onChange={handleSearch}
          />
        </div>
        <div className="feedbuttons" >
          <p onClick={() => handleCategory("All")}>All</p>
          <p onClick={() => handleCategory("Social")}>Social</p>
          <p onClick={() => handleCategory("games")}>Games</p>
          <p onClick={() => handleCategory("news")}>News</p>
          <p onClick={() => handleCategory("food")}>Food</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
