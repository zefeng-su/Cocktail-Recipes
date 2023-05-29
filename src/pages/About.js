import React from 'react'
import './About.css'
import gitLogo from '../images/GitHub_Logo_White.png'
import gitMark from '../images/github-mark-white.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='about-details'>
      <div className='container'>
        <div className='section-title'> 
          <h2 className='text-uppercase'>About</h2>
          <p>This site is created using React.js and Material-UI.</p> 
          <p>Cocktail data provided by <span className='fontwidth-6'><a href='https://www.thecocktaildb.com/api.php'>TheCocktailDB</a></span></p> 
        </div> <br/>
        <p>Find us at:</p> 
          <div>
            <Link to={`https://github.com/zefeng-su/`}>
              <button type="button" className='git-item-btn'>
                <img src={gitMark} alt="GitHub_Mark_White" width="20" height="20"/>
                <img src={gitLogo} alt="GitHub_Logo_White" width="20" height="20"/>
              </button>
            </Link>
          </div>
      </div>  
    </section>
  )
}

export default About