import React from 'react';
import './styles.css';

import searchIcon from '../../assets/search-icon.png';

const Search = () => {
  return (
    <div className='search'>
      <button className='search__submit'>
        <img src={searchIcon} alt="Search" />
      </button>
      <input className='search__input' type="text" placeholder='Type to search' />
    </div>
  );
};

export { Search };
