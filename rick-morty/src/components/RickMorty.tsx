import RickMortyCard from "./RickMortyCard.js";
import "./RickMortyStyle.css";
import RickMortyFavorite from "./RickMortyFavorite.js";

export default function RickMorty() {
  return (
    <div>
      <h1>Избранные персонажи</h1>
      <RickMortyFavorite />
      <h1>Все персонажи </h1>
      <RickMortyCard />
    </div>
  );
}
