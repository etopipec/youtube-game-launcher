import React from 'react';
import './styles.css';

import { GameCard } from '../GameCard/index.jsx';

import firePNG from '../../assets/fire.png';

const Recommended = ({ data }) => {
  return (
    <section className='recommended'>
      <header className='recommended__header'>
        <div className='recommended__title'>
          <span className='title__text'>RECOMMENDED FOR YOU</span>
          <img className='title__img' src={firePNG} alt="Recommended" />
        </div>
        <button className='recommended__view-all'>View All</button>
      </header>
      <div className='recommended__cards'>
        { data.map(game => <GameCard key={game.id} info={game} size={'small'} />) }
      </div>
    </section>
  )
};

export { Recommended };
