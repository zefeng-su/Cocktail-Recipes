import { createContext, useContext, useState, useEffect } from "react";

const FavAppContext = createContext(null); // Create a context for favorite 

const FavAppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // Define the state variable 'favorites' and its setter function using useState

  const addToFavorites = (cocktail) => {
    setFavorites((prevFavorites) => [...prevFavorites, cocktail]); // Update the 'favorites' state by appending the new cocktail
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((cocktail) => cocktail.id !== id) // Update the 'favorites' state by filtering out the cocktail with the given id
    );
  };

  // Using the useEffect hook to load the favorites from local storage when the component mounts
  useEffect(() => {
    // Retrieve the stored favorites from local storage
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites)); //If stored favorites exist, parse the JSON and update the 'favorites' state
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Convert the 'favorites' state to JSON and store it in local storage
  }, [favorites]);

  return (
    <FavAppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavAppContext.Provider>
  );
};

// Custom hook to access the context values in any component
export const useFavAppContext = () => {
  return useContext(FavAppContext);
};

export { FavAppContext, FavAppProvider };
