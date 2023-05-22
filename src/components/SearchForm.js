import React, {useRef, useEffect} from "react";
import './SearchForm.css'
import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from "../context/apiContext";


function SearchForm(props) {

  const{type, placeholder} = props
  const{setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  useEffect(()=> {
    searchValue.current.focus()
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
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
              onChange={searchCocktail}
              />
              <button type='submit' className='flex flex-center'>
                <SearchIcon className='text-black material-icons md-24'/> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm