import React, { useState } from 'react';

import { GameCard } from './GameCard/index.jsx';
import { Recommended } from './Recommended/index.jsx';
import { Sidebar } from './Sidebar/index.jsx';
import { Header } from './Header/index.jsx';
import { Slider } from './Slider/index.jsx';

import BackgroundImage from '../assets/bg1.png';
import BackgroundImage2 from '../assets/Overwatch.png';

const Main = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const backgrounds = [
    BackgroundImage,
    BackgroundImage2,
  ];

  return (
    <main className='main' style={{ backgroundImage: `url(${backgrounds[sliderIndex]})` }}>
      <Sidebar />

      <div className='content'>
        <div className='content__header'>
          <Header />
        </div>

        <div className='content__scroll-area'>
          <div className='content__slider'>
            <Slider onChange={(_, current) => setSliderIndex(current)}>
              <div>
                <div style={{height: 500}}>
                  <GameCard />
                </div>
              </div>
              <div>
                <div style={{height: 500}}>
                  <GameCard />
                </div>
              </div>
            </Slider>
          </div>

          <div className='content__recommended'>
            <Recommended />
          </div>
        </div>
      </div>
    </main>
  )
};

export { Main };
