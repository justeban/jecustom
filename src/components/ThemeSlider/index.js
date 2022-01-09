import React from 'react';
import classNames from 'classnames';

import './ThemeSlider.css';

export default function ThemeSlider({theme, setTheme}) {
  return (
    <div className={
      classNames({
        ThemeSlider: true,
        dark: theme
      })}
      onClick={() => setTheme(!theme)}
      >
      <span className="material-icons">
        dark_mode
      </span>
      <span className="material-icons">
        light_mode
      </span>
    </div>
  )
}