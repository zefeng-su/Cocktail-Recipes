import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import { AppProvider } from './components/apiContext'; 

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "cocktail" element = {<CocktailList />} />
            <Route path = "/cocktail/:id" element = {<CocktailDetails />} />
          </Routes>
        </BrowserRouter>
      </AppProvider> 
    </div>
  );
}

export default App;
