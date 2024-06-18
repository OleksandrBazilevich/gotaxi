import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import WithProviders from './app/providers';
import "./app/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WithProviders/>
  </React.StrictMode>
);
