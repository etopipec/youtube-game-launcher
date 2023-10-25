import React, { useEffect } from 'react';
import './styles.css';

import { Badge } from '../Badge/index.jsx';

const GameCard = ({ size = 'big', info }) => {
  useEffect(() => {
    console.log(info);
  }, []);

  return (
    <section className={`game-card size_${size}`}>
      { info && info.image && <img className='game-card__background' src={info.image} alt={info.name} /> }
      <div className='game-card__footer'>
        <div className='game-card__info'>
          <span className='game-card__name'>{info.name}</span>
          <ul className='game-card__tags'>
            {
              info.ganre.map((text) =>
                <li className='tags__tag' key={text}><Badge size={size}>{text}</Badge></li>)
            }
          </ul>
        </div>
        <strong className='game-card__price'>Rp {Math.floor(2000 + Math.random() * (10000 + 1 - 2000)) }</strong>
      </div>
    </section>
  )
};

export { GameCard };
