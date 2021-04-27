import React from 'react';
import './App.scss';

import Game from '../Game';

function App() {
  return (
    <div className='app'>
      <header className='app__header'></header>
      <main className='app__main'>
        <Game />
      </main>
    </div>
  );
}

export default App;
