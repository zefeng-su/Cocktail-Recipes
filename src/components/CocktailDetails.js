import React from 'react'
import {Link} from 'react-router-dom'
import "./CocktailList.css"

function CocktailDetails(props) {
  const {image, name, id, info, glass} = props;
  
  return (
    <div className='cocktail-item flex flex-column flex-space-between'>
      
      <div className="cocktail-item-img">
        <img src={image} alt={name}/>
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

        <Link to = {`/cocktail/${id}`}>
          <div className='cocktail-item-btn fontsize-12 fontwidth-6'>
            Click here for details
          </div>
        </Link>

      </div>

    </div>
  )
}

export default CocktailDetails