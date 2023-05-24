import React from 'react';
import './Favorites.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useGlobalContext } from '../context/apiContext'

function Favorites(props) {

  const {visibility, drink, onRemove, onClose} = props;
  const {cocktail} = useGlobalContext();

  return (
    <div className="modal" style={{display: visibility? "block":"none",}}>
    <div className="favCart">
      <div className="header">
        <h2>Your Favorites</h2>
        <button onClick={onClose}>
          <HighlightOffIcon className='material-icons.md28'/>
        </button>
      </div>
      <div className="cart-products">
         
        {cocktail.length === 0 && (
          <span className="empty-text">
            Your favorites is currently empty
          </span>
        )}   
        {cocktail.map((drink) => ( 
          <div className="cart-product" key={drink.id}>
            <img src={drink.image} alt={drink.name}/>
      
            <div className="product-info">
              <h3>{drink.name}</h3>
            </div>
 
            <button className="btn remove-btn">
              <DeleteOutlineIcon className='material-icons.md-28'/>    
            </button>   
          </div>
         ))} 
      </div>
    </div>
  </div>
);
}

export default Favorites