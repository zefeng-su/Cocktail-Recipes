import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'
import {useParams,  useNavigate} from 'react-router-dom'
import './SingleCocktail.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import missing from '../images/missing.png'

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="; // API URL for fetching cocktail details

function SingleCocktail() {
  const {id} = useParams(); // Extracting the "id" parameter from the URL

  // Setting up state variables
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  
  const navigate = useNavigate(); // Navigation function for routing
 
   // To fetch cocktail details from the API
  useEffect (() => {
    setLoading(true);
    const getCocktail = async() => {
      try{
          const response = await fetch(`${url}${id}`);
          const data = await response.json();
          if(data.drinks) {
             // Destructuring the drink details from the API response
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

             // Creating an array of ingredients
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

            // Creating a new cocktail object with the extracted details
            const newCocktail = {
              name, image, info, category, glass, instructions, ingredients 
            } 
            setCocktail(newCocktail); // Updating the cocktail state with the newCocktail object
          } else {
              setCocktail(null); // If no drinks are found, setting cocktail state to null
            } setLoading(false); // Setting loading state to false after fetching and processing data
      } 
      catch(error){
        console.log(error);
        setLoading(false);  
      }
    }
      getCocktail();  // Calling the getCocktail function to fetch the cocktail details
  },[id])

  // If loading state is true, render a Loader component
  if(loading) {
    return <Loader/>
  };

  // If cocktail state is null, render a message and image indicating no cocktail to display
  if(!cocktail) {
    return (
      <section className='about-details'>
        <div className='container'>
          <div className='section-title'> 
            <h2 className='text-uppercase'>No cocktail to display</h2>
            <img className='missing' src={missing} alt="missing-img" />
          </div>
        </div>
      </section>
    ) 
  };

  // Destructuring the cocktail details from the cocktail state
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

export default SingleCocktail;