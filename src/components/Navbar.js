import React  from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from '../images/logo.png'
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
 

function Navbar(props) {

  const { favVisibility, setfavVisibility } = props;

  return (
    
    <nav className="navbar" id="navbar">

      <div className="container navbar-content flex">
        <div className="brand flex flex-space-between">
          
          <Link to = "/" className="navbar-brand flex">
            <img src={logo} style={{ width: '7%' }} alt="site-logo" />
            <span className="fontwidth-2 fontsize-24 ls-1">cocktail recipes</span>  
          </Link>

          <button type="button" className="navbar-fav-btn" onClick={()=> setfavVisibility(!favVisibility)}>
            <BookmarkBorderIcon className="material-icons md"/>
          </button>

        </div>
    
        <div>
          <Link to ="about" >
            <button type="button" className="navbar-about-btn">
              <InfoIcon className="material-icons md"/>
            </button>
          </Link>        
        </div>

      </div>
    </nav>
  )
}

export default Navbar