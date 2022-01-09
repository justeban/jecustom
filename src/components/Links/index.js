import React from 'react';

import './Links.css';

export default function Links() {
  return (
    <div className="Links">
      <div className="Links_link" >
        <span className="material-icons link-icon">
          email
        </span>
        <a
          href="mailto:info@jecustom.build"
          target="_blank"
          rel="noreferrer"
        >
          info@jecustom.build
        </a>
      </div>
      <div className='Links_link'>
        <span className="material-icons link-icon">
          call
        </span>
        <a
          href="tel:5093852863"
          target="_blank"
          rel="noreferrer"
        >
          509-385-2863
        </a>
      </div>
    </div>
  );
}