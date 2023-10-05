import React from 'react';
import './styles.css';

const Badge = ({ children, size = 'big' }) => {
  return (
    <span className={`badge size_${size}`}>{ children }</span>
  )
};

export { Badge };
