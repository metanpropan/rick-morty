// import styles from './CardStyle.css'
import { useState, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const personArray = [];
function RickMortyCard({ data, setDatas }) {
  const sendDataToPatent = (s) => {
    setDatas(s);
    const isExist = personArray.some(
      (item) => JSON.stringify(item) === JSON.stringify(s)
    );
    if (!isExist) {
      personArray.push(s);
    }
    localStorage.setItem("favorPerson", JSON.stringify(personArray));
  };
  useEffect(() => {}, []);

  if (data == null) return <div>Error</div>; //если удалить падает? не успевает загрузиться?
  return (
    <div class="grid grid-cols-3">
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
            <CardContent>
              <div>
                <img src={item.image} alt="" />
              </div>
              <button
                onClick={() =>
                  sendDataToPatent({
                    name: item.name,
                    status: item.status,
                    image: item.image,
                  })
                }
              >
                {" "}
                В избранное
              </button>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default RickMortyCard