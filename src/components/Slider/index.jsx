import React from 'react';
import './styles.css';

import { default as SlickSlider } from "react-slick";

const Slider = ({ children, onChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: onChange,
    customPaging: i => (
      <div className='slider__dot'></div>
    )
  };

  return (
    <SlickSlider className='slider' {...settings}>
      {children}
    </SlickSlider>
  )
};

export { Slider };
