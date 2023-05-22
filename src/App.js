import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import CocktailList from './components/CocktailList';
import Navbar from './components/Navbar'; 
import SingleCocktail from './pages/SingleCocktail';


function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "cocktail" element = {<CocktailList />} />
            <Route path = "/cocktail/:id" element = {<SingleCocktail />} />
            <Route path = "*" element = {<Error />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
