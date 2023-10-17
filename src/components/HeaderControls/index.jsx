import React from 'react';
import './styles.css';

import notificationIcon from '../../assets/notification-icon.png';
import cartIcon from '../../assets/cart-icon.png';
import logoIcon from '../../assets/logo-icon.png';

import { PressableIcon } from '../PressableIcon/index.jsx';

const HeaderControls = () => {
  return (
    <div className='header-controls'>
      <PressableIcon src={cartIcon} />
      <PressableIcon src={notificationIcon} hasChanges />
      <PressableIcon src={logoIcon} />
    </div>
  )
};

export { HeaderControls };
