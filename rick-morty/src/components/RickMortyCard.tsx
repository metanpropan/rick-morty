import { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AllCharactersContext } from "./RickMorty";

export default function RickMortyCard() {
  const dataCharacters = useContext(AllCharactersContext);

  return (
    <div className="grid grid-cols-3">
      {dataCharacters.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
            <CardContent>
              <img src={item.image} alt="" />
              <button>В избранное</button>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
