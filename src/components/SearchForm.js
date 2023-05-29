import React, {useRef, useEffect} from "react";
import './SearchForm.css'
import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from "../context/apiContext";
import { useNavigate } from 'react-router-dom';


function SearchForm(props) {

  const{type, placeholder} = props //Destructuring the props object  
  const{setSearchTerm} = useGlobalContext(); // Accessing setSearchTerm from apiContext.js
  const searchValue = useRef('');   // Creating a reference to the search input field
  const navigate = useNavigate();

  // Instructing the browser to give input focus to search field, allowing the user to type into input field immediately when searchForm is mounted.
  useEffect(()=> {
    searchValue.current.focus()
  }, []);

 
  const handlerSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchValue.current.value) // Setting the search term in the global context
    navigate('/cocktail')
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className="search-form-content">
          <form className='search-form' onSubmit={handlerSubmit}>
            <div className='search-form-element flex flex-space-between bg-white'>
              <input 
              className='form-ctrl' 
              type={type} 
              placeholder={placeholder}
              id="name"
              ref={searchValue}
              />
              <button type='submit' className='flex flex-center' onClick={handlerSubmit}>
                <SearchIcon className='text-black material-icons md-24'/> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;