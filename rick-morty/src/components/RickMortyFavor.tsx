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
} from "@/components/ui/card";

function RickMortyFavor({ getDataFavor }) {
const [delPersons, setDelPerson] = useState();

  let userData = JSON.parse(localStorage.getItem("favorPerson"));

  const delPerson = (s) => {
    delete userData[0]
    console.log(userData)
  }

    useEffect(() => {
      delPerson
    }, []);
  if (userData == null) return <div>Избранных нет</div>;
  return (
    <div class="grid grid-cols-3">
      {userData.map((item) => (
        <Card key={item.name}>
          <CardHeader><button onClick={() =>
                  delPerson(item)
                }> Удалить</button>
            <CardTitle>{item.name}</CardTitle>
            
            <CardDescription>{item.status}</CardDescription>
            <CardContent>
              <div>
                <img src={item.image} alt="" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default RickMortyFavor;
