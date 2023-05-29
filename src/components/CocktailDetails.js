import React from 'react'
import { Link } from 'react-router-dom'
import "./CocktailList.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavAppContext } from '../context/favContext';

// The following component is responsible for rendering the details of a cocktail.
function CocktailDetails(props) {
  // Destructuring the props object to get the required data for rendering.
  const { id, image, name, info, glass } = props;

  // Accessing the favorites state and the functions to add and remove favorites from the context.
  const { favorites, addToFavorites, removeFromFavorites } = useFavAppContext();
  
  // Checking if the current cocktail is in the favorites list.
  const isFavorite = favorites.some((cocktail) => cocktail.id === id);

  // Function to handle the click event when the favorite button is clicked.
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(id); // If the cocktail is already a favorite, remove it from the favorites list.
    } else {
      addToFavorites({ id, image, name }); // If the cocktail is not a favorite, add it to the favorites list.
    }
  };

  return (
    <div className='cocktail-item flex flex-column flex-space-between'>
      <div className="cocktail-item-img">
        <img src={image} alt={name} /> 
      </div>

      <div className='cocktail-item-info text-center'>
        <div className='cocktail-item-info-item-name fontsize-18'>
          <span className='fontwidth-7'>Name: </span>
          <span>{name}</span> 
        </div>

        <div className='cocktail-item-info-item-glass fontsize-15'>
          <span className='fontwidth-7'>Glass: </span>
          <span>{glass}</span>  
        </div>

        <div className='cocktail-item-info-item-info fontsize-15'>
          <span className='fontwidth-7'>Info: </span>
          <span>{info}</span>
        </div>

        <Link to={`/cocktail/${id}`}> {/* Link to the detailed page of the cocktail */}
          <button type="button" className='cocktail-item-btn'>
            Details
          </button>
        </Link>

        <br /> <br />

        {/* Button to add or remove the cocktail from favorites */}
        <button type="button" className='fav-btn' onClick={handleFavoriteClick}> 
          {isFavorite ? (
            <>
              <FavoriteIcon className='text-white material-icons md-12' />
              Remove from favorite
            </> ) : (
            <>
              <FavoriteIcon className='text-white material-icons md-12' />
              Add to favorite
            </> )  
          }
        </button>
      </div>
    </div>
  )
}

export default CocktailDetails;
