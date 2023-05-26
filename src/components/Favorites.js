import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Favorites.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useFavAppContext } from '../context/favContext';

function Favorites(props) {
  const { visibility, onClose } = props;
  const { favorites, removeFromFavorites } = useFavAppContext();
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    onClose();
    navigate(`/cocktail/${id}`);
  };

  return (
    <div className="modal" style={{ display: visibility ? "block" : "none" }}>
      <div className="favCart">
        <div className="header">
          <h2>Your Favorites</h2>
          <button onClick={onClose}>
            <HighlightOffIcon className='material-icons.md28' />
          </button>
        </div>
        <div className="cart-products">
          {favorites.length === 0 && (
            <span className="empty-text">
              Your favorites is currently empty
            </span>
          )}
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
