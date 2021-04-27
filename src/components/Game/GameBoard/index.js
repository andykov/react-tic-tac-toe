import React from 'react';
import './style.scss';

import GameSquare from '../GameSquare';

const GameBoard = () => {
  return (
    <div className='game-board'>
      Game-Board Component
      <GameSquare item='1' />
      <GameSquare item='2' />
      <GameSquare item='3' />
    </div>
  );
};

export default GameBoard;
