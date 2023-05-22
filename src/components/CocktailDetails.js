import React from 'react'
import {Link} from 'react-router-dom'

function CocktailDetails(props) {
  const {image, name, id, info, glass} = props;
  
  return (
    <article>
      <div className="cocktail">
        <img src={image} alt={name}/>
      </div>
      <div className='img-container'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to = {`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Click here for details
        </Link>
      </div>
    </article>
  )
}

export default CocktailDetails