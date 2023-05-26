import { createContext, useContext, useState, useEffect } from "react";

const FavAppContext = createContext(null);

const FavAppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (cocktail) => {
    setFavorites((prevFavorites) => [...prevFavorites, cocktail]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((cocktail) => cocktail.id !== id)
    );
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
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

export const useFavAppContext = () => {
  return useContext(FavAppContext);
};

export { FavAppContext, FavAppProvider };
