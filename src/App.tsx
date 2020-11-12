import React from 'react';
import About from './About';
import './app.css';

const App = () => {
  return (
    <div>
      <div>
        <div>{'What a save!'}</div></div>
      <div>
        <div className="what-a-save">Hello <div>zixiCat!</div></div>
        <About />
        <input placeholder="What a save!" />
      </div>
    </div>
  );
};

export default App;
