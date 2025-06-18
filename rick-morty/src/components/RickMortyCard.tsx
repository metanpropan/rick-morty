// import styles from './CardStyle.css'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function RickMortyCard({data}) {
      if (data==null) return <div>Error</div>; //если удалить падает? не успевает загрузиться?
    return (
    <div>
        <ul>
            {data.map(item => (
            <Card className="w-full max-w-sm" key={item.id}>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                        <CardDescription>
                            {item.status}
                        </CardDescription>
                        <CardContent>
                            
                        </CardContent>
                </CardHeader>
                </Card>
            ))}  
        </ul>
    </div>
  )
}

export default RickMortyCard