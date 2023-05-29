import React, {useState, useContext, useEffect, createContext, useCallback} from "react";
 
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' //// API URL for retrieving cocktail data
const AppContext = createContext(); //Create a context for sharing data between components

// AppProvider component to manage state and API calls
const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true); // Flag to indicate if data is being loaded
    const [searchTerm, setSearchTerm] = useState('');  // Search term entered by the user
    const [cocktail, setCocktail] = useState([]);  // Array to store cocktail data
   
      // Function to fetch data from the API
    const fetchAPI = useCallback(async() => {
        setLoading(true); // Set loading flag to true

        try{
            const response = await fetch(`${url}${searchTerm}`) // Fetch data from API using the provided URL and search term
            const data = await response.json(); // Convert the response to JSON format
            //console.log(data);
            const {drinks} = data; // Extract the 'drinks' property from the response data

            if(drinks) {
                 // Extract necessary props from each drink item and create a new object
                const newCocktail = drinks.map((item) => {
                    const { 
                        idDrink, 
                        strDrink, 
                        strDrinkThumb,  
                        strAlcoholic, 
                        strGlass 
                    } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    };
                });
                setCocktail(newCocktail); // Update the 'cocktail' state with the new array of transformed data
            } else {
                setCocktail([]); // If no drinks are found, reset the 'cocktail' state to an empty array
            };
            setLoading(false); // Set loading flag to false as data fetching is completed
        }
        catch(error){
          console.log(error);
          setLoading(false); // Set loading flag to false in case of an error  
        }
    },[searchTerm]); // Depend on the 'searchTerm' variable to trigger API calls when it changes

     // useEffect hook to fetch data when the component mounts or when the 'searchTerm' or 'fetchAPI' function changes
    useEffect ( ()=> {
        fetchAPI();
    },[searchTerm, fetchAPI])
    
    // Provide the state values and functions to the children components using the AppContext.Provider
    return(
        <AppContext.Provider value={{
            loading,           
            cocktail,
            setSearchTerm, 
        }}>
            {children}
        </AppContext.Provider>
    );       
};

// Custom hook to access the context values in any component
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider};
 

