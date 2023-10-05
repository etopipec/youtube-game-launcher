import React from 'react';
import './styles.css';

import { Badge } from '../Badge/index.jsx';

import planetOfLanaBg from '../../assets/planet-of-lana.png';

const GameCard = ({ size = 'big' }) => {
  return (
    <section className={`game-card size_${size}`}>
      <img className='game-card__background' src={planetOfLanaBg} alt="Planet of Lana" />
      <div className='game-card__footer'>
        <div className='game-card__info'>
          <span className='game-card__name'>Planet  of Lana</span>
          <ul className='game-card__tags'>
            {
              ['Adventure', 'Puzzle', 'Platformer'].map((text) =>
                <li className='tags__tag'><Badge size={size}>{text}</Badge></li>)
            }
          </ul>
        </div>
        <strong className='game-card__price'>Rp 165 999</strong>
      </div>
    </section>
  )
};

export { GameCard };
