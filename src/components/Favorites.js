import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Favorites.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useFavAppContext } from '../context/favContext';
 
function Favorites(props) {
  const { visibility, onClose } = props;

  // Destructuring the favorites and removeFromFavorites states from favContext.js
  const { favorites, removeFromFavorites } = useFavAppContext();
  
  // Provides a way to navigate to a specific cocktail item when its image is clicked.
  const navigate = useNavigate();

  // Handles the click event when an image of a favorite item is clicked.
  const handleImageClick = (id) => {
    onClose();
    navigate(`/cocktail/${id}`);  // Closes the modal then navigates to the corresponding cocktail item page.
  };

  return (
    // The modal container. It is displayed or hidden based on the value of the 'visibility' prop.
    <div className="modal" style={{ display: visibility ? "block" : "none" }}> 
      <div className="favCart">
        <div className="header">
          <h2>Your Favorites</h2>
          <button onClick={onClose}>
            <HighlightOffIcon className='material-icons.md28' />
          </button>
        </div>
        {/* If there are no favorite items, display a message indicating that the favorites list is empty */}
        <div className="cart-products">
          {favorites.length === 0 && (
            <span className="empty-text">
              Your favorites is currently empty
            </span>
          )}
            {/* Iterate over the favorite items and display them */}
          {favorites.map((item) => (
            <div className="cart-product" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                onClick={() => handleImageClick(item.id)}
              />

              <div className="product-info">
                <h3>{item.name}</h3>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromFavorites(item.id)}
              >
                <DeleteOutlineIcon className='material-icons.md-28' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
