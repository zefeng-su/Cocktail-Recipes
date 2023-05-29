import React from 'react'
import loader from '../images/loader.svg'
 
import './Loader.css'

function Loader() {
  return (
    <div className='loader flex flex-center'> 
      <img src = {loader} alt='loading...'/>
    </div>
  )
}

export default Loader