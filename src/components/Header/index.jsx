import React from 'react';
import './styles.css';

import { Search } from '../Search/index.jsx';
import { HeaderControls } from '../HeaderControls/index.jsx';

const Header = () => {
  return (
    <header className='header'>
      <Search />
      <HeaderControls />
    </header>
  )
};

export { Header };
