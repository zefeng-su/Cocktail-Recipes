import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'
import {useParams, Link, useNavigate} from 'react-router-dom'
import './SingleCocktail.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const navigate = useNavigate();

  useEffect (() => {
    setLoading(true);
    const getCocktail = async() => {
      try{
          const response = await fetch(`${url}${id}`);
          const data = await response.json();
          if(data.drinks) {
            const {
              strDrink:name, 
              strDrinkThumb:image, 
              strAlcoholic:info, 
              strCategory:category, 
              strGlass:glass, 
              strInstructions:instructions, 
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
            } = data.drinks[0]

            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
            ]

            const newCocktail = {
              name, image, info, category, glass, instructions, ingredients 
            } 
            setCocktail(newCocktail);
          } else {
              setCocktail(null);
            } setLoading(false); 
      } 
      catch(error){
        console.log(error);
        setLoading(false);  
      }
    }
      getCocktail();
  },[id])

  if(loading) {
    return <Loader/>
  };

  if(!cocktail) {
    return (
      <div>
        <h2>No cocktail to display</h2>
        
        <Link to = "/">
        <p>go back</p>
        </Link>
      </div>
    )
    
  };

  const { name, image, info, category, glass, instructions, ingredients } =  cocktail; 
  
  return (
    <section className='cocktail-details'>
      <div className='container'>
        <button type="button" className='flex flex-center back-btn'
        onClick={() => navigate('/cocktail')}>
        <ArrowLeftIcon  className='text-black material-icons md-32'/>
        <span className='fontsize-18 fontwidth-6'>Back</span>
        </button>
 
        <div className='cocktail-details-content grid'>
          <h2>{name}</h2>
          <div className='cocktail-details-img'>
            <img src={image} alt={name}/> 
          </div>

          <div className='cocktail-details-info'>
          
            <div className='cocktail-details-item'>
              <span className='fontwidth-6'>Category: </span> 
              <span>{category}</span>
            </div>
            <div className='cocktail-details-item'>
              <span className='fontwidth-6'>Info: </span> 
              <span>{info}</span>
            </div>
            <div className='cocktail-details-item'>
              <span className='fontwidth-6'>Glass: </span> 
              <span>{glass}</span>
            </div>
            <div className='cocktail-details-item'>
              <span className='fontwidth-6'><br/>Instructions: <br/></span> 
              <span>{instructions}</span>
            </div>
            <div className='cocktail-details-item'>
              <span className='fontwidth-6'><br/>Ingredients: <br/></span> 
              {ingredients.map((item,index)=>{
                return item?<li key={index}>{item}</li>:null
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail