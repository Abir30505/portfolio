import React, { useState } from 'react';
import Products from './products';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const val = e.target.value.toUpperCase();
    setSearchTerm(val);
  };

  const searchClick = () => {
    const productsElements = document.querySelectorAll('h1'); // assuming you want to search within <p> elements

    productsElements.forEach((element) => {
      const content = element.textContent || element.innerHTML;
      if (content.toUpperCase().indexOf(searchTerm) > -1) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });
  };

  return (
    <div>
      <form action="">
        <div className="search d-flex rounded mx-5">
          <input
            type="text"
            className="rounded-start border-warning border-right-none"
            onChange={handleInputChange}
          />
          <div className="search-icon bg-dark rounded-end">
            <i
              className="fas fa-search text-warning px-3 pt-2 cursor-pointer"
              onClick={searchClick}
            ></i>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;