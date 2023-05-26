import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { AppProvider } from './context/apiContext'; 
import { FavAppProvider } from './context/favContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <AppProvider>
      <FavAppProvider>
        <App />
      </FavAppProvider>
    </AppProvider>
  </React.StrictMode> 
);

 