import React from 'react';
import './styles.css';

import { PressableIcon } from '../PressableIcon/index.jsx';

import chatIcon from '../../assets/chat-icon.png';

const ChatButton = ({ onClick }) => {
  return (
    <div className='chat-button' onClick={onClick}>
      <PressableIcon src={chatIcon} hasChanges />
      <span className='chat-button__text'>Friends & Chat</span>
    </div>
  )
};

export { ChatButton };
