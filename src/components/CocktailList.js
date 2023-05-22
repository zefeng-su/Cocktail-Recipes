import React from 'react'
import CocktailDetails from './CocktailDetails'
import Loader from './Loader';
import { useGlobalContext } from '../context/apiContext'

function CocktailList() {
  const {cocktail, loading} = useGlobalContext();
  
  if(loading) {
    return <Loader/>
  };

  if(cocktail.length < 1) {
    return <h2>No matches found</h2>
  };

  return (
    <section className='section'>
      <h2 className='section-title'>
        YOUR SEARCH RESULTS
      </h2>
      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <CocktailDetails key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList