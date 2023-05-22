import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h2>Oops! Page not found.</h2>
      <Link to = "/">
      <p>go back</p>
      </Link>
    </div>    
  )
}

export default Error