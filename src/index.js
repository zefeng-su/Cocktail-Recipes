import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "cocktail" element = {<CocktailList />} />
      <Route path = "/cocktail/:id" element = {<CocktailDetails />} />
    </Routes>
  </BrowserRouter>
);

 