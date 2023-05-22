import React, {useState, useContext, useEffect, createContext, useCallback} from "react";
 
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext();

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('s');
    const [cocktail, setCocktail] = useState([]);
    const [result, setResult] = useState('');

    const fetchAPI = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${url} ${searchTerm}`)
            const data = await response.json();
            console.log(data);
            const {drinks} = data;

            if(drinks) {
                const newCocktail = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        glass: strGlass,
                    };
                });
                setCocktail(newCocktail);
            } else {
                setCocktail([]);
            };
            setLoading(false);
        }
        catch(error){
          console.log(error);
          setLoading(false);  
        }
    },[searchTerm]);

    useEffect ( ()=> {
        fetchAPI();
    },[searchTerm, fetchAPI])
    
    return(
        <AppContext.Provider value={{loading, searchTerm, cocktail,setSearchTerm, result, setResult}}>
            {children}
        </AppContext.Provider>
    );
        
};

export const useGlobalContext = () => {
        return useContext(AppContext);
};

export {AppContext, AppProvider}
 

