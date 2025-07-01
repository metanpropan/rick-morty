import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRickMortyContext } from "@/context/RickMortyContext/RickMortyContext";
import { useEffect } from "react";

export default function RickMortyFavor() {
  const { favoriteCharacters, toggleCharacters } = useRickMortyContext();

  // useEffect(() => {
  //   toggleCharacters();
  // }, []);
  console.log(favoriteCharacters);
  return (
    <div className="grid grid-cols-3">
      {favoriteCharacters.map((item: Character) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
            <CardContent>
              <img src={item.image} alt="" />
              <button onClick={() => toggleCharacters(item.id)}>Удалить</button>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
