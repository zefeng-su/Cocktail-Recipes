import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import CocktailList from './components/CocktailList';
import SingleCocktail from './pages/SingleCocktail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "cocktail" element = {<CocktailList />} />
          <Route path = "/cocktail/:id" element = {<SingleCocktail />} />
          <Route path = "*" element = {<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
