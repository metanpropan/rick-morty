import {
  RickMortyServices,
  type Characters,
} from "@/services/rickmorty.service";
import { createContext, useState, useContext, useEffect } from "react";

const RickMortyContext = createContext();

export const RickMortyProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState<Characters>([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState<Characters>([]);

  const fetchData = async () => {
    const allCharacters = await RickMortyServices.getAll();
    setAllCharacters(allCharacters);
  };

  const toggleCharacters = (id: Characters) => {
    if (localStorage.getItem(id) !== null) {
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(
        id,
        JSON.stringify(allCharacters.filter((item) => item.id == id))
      );
      setFavoriteCharacters(allCharacters.filter((item) => item.id == id));
    }
  };

  const value = {
    allCharacters,
    favoriteCharacters,
    fetchData,
    toggleCharacters,
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RickMortyContext.Provider value={value}>
      {children}
    </RickMortyContext.Provider>
  );
};

export const useRickMortyContext = () => {
  const context = useContext(RickMortyContext);
  if (context === undefined) {
    throw new Error("mistake");
  }
  return context;
};
