import React from 'react';

import { GameCard } from './GameCard/index.jsx';
import { Recommended } from './Recommended/index.jsx';
import { Sidebar } from './Sidebar/index.jsx';
import { Header } from './Header/index.jsx';

import BackgroundImage from '../assets/bg1.png';

const Main = () => {
  return (
    <main className='main' style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Sidebar />

      <div className='content'>
        <div className='content__header'>
          <Header />
        </div>

        <GameCard />

        <div className='content__recommended'>
          <Recommended />
        </div>
      </div>
    </main>
  )
};

export { Main };
