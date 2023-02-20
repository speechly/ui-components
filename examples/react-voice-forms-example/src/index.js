import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SpeechProvider appId="YOUR-APP-ID" logSegments debug>
      <App />
    </SpeechProvider>
  </React.StrictMode>
);
