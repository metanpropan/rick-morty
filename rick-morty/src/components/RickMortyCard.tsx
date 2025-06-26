import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Character } from "@/services/rickmorty.service";
import { useRickMortyContext } from "@/context/RickMortyContext/RickMortyContext";

export default function RickMortyCard() {
  const { allCharacters, toggleCharacters } = useRickMortyContext();
  return (
    <div className="grid grid-cols-3">
      {allCharacters.map((item: Character) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
            <CardContent>
              <img src={item.image} alt="" />
              <button onClick={() => toggleCharacters(item.id)}>
                В избранное
              </button>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
