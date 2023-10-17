import React from 'react';
import './styles.css';

const PressableIcon = ({ src, hasChanges, onClick = () => {} }) => {
  return (
    <button className='pressable-icon' onClick={onClick}>
      <img className='pressable-icon__img' src={src} />
      { hasChanges && <div className='pressable-icon__dot'></div>}
    </button>
  )
};

export { PressableIcon };
