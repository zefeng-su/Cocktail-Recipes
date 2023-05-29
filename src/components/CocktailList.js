import React from 'react'
import CocktailDetails from './CocktailDetails'
import Loader from './Loader';
import "./CocktailList.css"
import { useGlobalContext } from '../context/apiContext'
import missing from '../images/missing.png'

function CocktailList() {
  // Destructuring the cocktail and loading states from the apiContext.js
  const {cocktail, loading} = useGlobalContext();

  // If loading is true, render the Loader component
  if(loading) {
    return <Loader/>
  };

  // If the length of the cocktail array is less than 1, render the "no matches found" section
  if(cocktail.length < 1) {
    return (
      <section className='cocktail-list'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-uppercase'>no matches found</h2>
          <img className='missing' src={missing} alt="missing-img" />
        </div>
      </div>
    </section>
    )
  };

  // Render the "your search results" section with the cocktail details
  return (
    <section className='cocktail-list'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-uppercase'>
            your search results
          </h2>
          <div className='cocktail-content grid'>
            {/* Map through each item in the cocktail array and render the CocktailDetails component */}
            {cocktail.map((item) => {
              return <CocktailDetails key={item.id} {...item}/> 
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailList;