import React, {useState} from 'react';
import classNames from 'classnames';

import ThemeSlider from './components/ThemeSlider';
import Links from './components/Links';

import lightLogo from './images/jecustomlogo-2-rect.png';
import darkLogo from './images/jecustomlogo-2-white-rect.png'

import './App.css';

function App() {
  const [themeIsDark, setTheme] = useState(false);
  return (
    <div className={classNames({App: true, dark: themeIsDark})}>
      <header className="App-header">
        <ThemeSlider theme={themeIsDark} setTheme={setTheme}/>
        <img src={themeIsDark ? darkLogo : lightLogo} className="App-logo" alt="logo" />
        <Links />
      </header>
    </div>
  );
}

export default App;
