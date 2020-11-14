import React, {useState} from 'react';
import i18next from 'i18next';
import About from './About';
import './app.css';

const App = () => {
  // update components
  const [curLng, setCurLng] = useState<'en'|'cn'>('en');

  return (
    <div>
      <p>The current language is {curLng}</p>

      <button onClick={()=>{
        i18next.changeLanguage('cn')
            .then(()=>setCurLng('cn'));
      }}>切换至中文</button>

      <button style={{
        margin: '0 0 20px 20px',
      }} onClick={()=>{
        i18next.changeLanguage('en')
            .then(()=>setCurLng('en'));
      }}>Switch to English</button>

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
