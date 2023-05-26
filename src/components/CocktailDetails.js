import React from 'react'
import { Link } from 'react-router-dom'
import "./CocktailList.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavAppContext } from '../context/favContext';

function CocktailDetails(props) {
  const { id, image, name, info, glass } = props;
  const { favorites, addToFavorites, removeFromFavorites } = useFavAppContext();

  const isFavorite = favorites.some((cocktail) => cocktail.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, image, name });
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

        <Link to={`/cocktail/${id}`}>
          <button type="button" className='cocktail-item-btn'>
            Details
          </button>
        </Link>

        <br /> <br />
        <button type="button" className='fav-btn' onClick={handleFavoriteClick}> 
          {isFavorite ? (
            <>
              <FavoriteIcon className='text-white material-icons md-12' />
              Remove from favorite
            </>) : (
            <>
              <FavoriteIcon className='text-white material-icons md-12' />
              Add to favorite
            </>
            )
          }
        </button>
      </div>
    </div>
  )
}

export default CocktailDetails
