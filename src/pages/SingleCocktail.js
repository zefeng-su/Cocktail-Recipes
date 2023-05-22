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
            } = data.drinks[0]

            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
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
    return <h2>No cocktail to display</h2>
  };

  const { name, image, info, category, glass, instructions, ingredients } =  cocktail; 
  
  return (
    <section>
      <Link to = "/">
      <p>go back</p>
      </Link>

      <h2>{name}</h2>
      <div>
        {/*<img src={image} alt={name}/>*/}

        <div>
          <p>Name: <span>{name}</span></p>
          <p>Category: <span>{category}</span></p>
          <p>Info: <span>{info}</span></p>
          <p>Glass: <span>{glass}</span></p>
          <p>Instructions: <br/><span>{instructions}</span></p>
          <p><span>Ingredients:</span><br/>
          {ingredients.map((item,index)=>{
            return item?<li key={index}>{item}</li>:null
          })}
          </p>
        </div>

      </div>
    </section>
  )
}

export default SingleCocktail