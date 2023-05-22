import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section>
      <h1>Oops! Page not found.</h1>
      <Link to = "/">
      <p>go back</p>
      </Link>
    </section>    
  )
}

export default Error