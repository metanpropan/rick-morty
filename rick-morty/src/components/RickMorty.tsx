import React, { useState, useEffect } from "react";
import { RickMortyServices } from "../services/rickmorty.service.ts";
import RickMortyCard from "./RickMortyCard.js";
import "./RickMortyStyle.css";
import RickMortyFavorite from "./RickMortyFavorite.js";

export const AllCharactersContext = React.createContext();

export default function RickMorty() {
  const [allCharacters, setAllCharacters] = useState([]);

  const fetchData = async () => {
    const allCharacters = await RickMortyServices.getAll();
    setAllCharacters(allCharacters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AllCharactersContext.Provider value={allCharacters}>
      <div>
        <h1>Избранные персонажи</h1>
        <RickMortyFavorite />
        <h1>Все персонажи </h1>
        <RickMortyCard />
      </div>
    </AllCharactersContext.Provider>
  );
}
