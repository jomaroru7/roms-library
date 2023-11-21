import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RomsLibrary } from './RomsLibrary';

const root = ReactDOM.createRoot(
  document.getElementById('front-roms-library-container') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RomsLibrary/>
  </React.StrictMode>
);
