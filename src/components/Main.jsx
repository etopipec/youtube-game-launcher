import React, { useState, useEffect } from 'react';

import { GameCard } from './GameCard/index.jsx';
import { Recommended } from './Recommended/index.jsx';
import { Sidebar } from './Sidebar/index.jsx';
import { Header } from './Header/index.jsx';
import { Slider } from './Slider/index.jsx';

const Main = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [games, setGames] = useState([]);
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const res = await fetch('http://localhost:8080/games', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();

      if (res?.status === 200) {
        setGames(json.filter((_, i) => i < 10));
      }
    }
    
    getGames();
  }, [setGames]);

  useEffect(() => {
    setBackgrounds(games.map(game => game.image));
    setRecommendedGames(games.filter((_, i) => i < 2));
  }, [games, setBackgrounds]);

  return (
    <main className='main'>
      { backgrounds[sliderIndex] && <img className="main__bg-image" src={backgrounds[sliderIndex]} /> }
      <Sidebar />

      <div className='content'>
        <div className='content__header'>
          <Header />
        </div>

        { games.length > 0 && <div className='content__scroll-area'>
          <div className='content__slider'>
            <Slider onChange={(_, current) => setSliderIndex(current)}>
              { games.map(game => {
                return <div key={game.id}>
                  <div style={{ height: 500 }}>
                    <GameCard info={game} />
                  </div>
                </div>
              }) }
            </Slider>
          </div>

          <div className='content__recommended'>
            <Recommended data={recommendedGames} />
          </div>
        </div> }
      </div>
    </main>
  )
};

export { Main };
