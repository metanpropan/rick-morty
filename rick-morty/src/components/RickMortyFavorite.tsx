import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RickMortyFavor() {
  return (
    <div className="grid grid-cols-3">
      <Card>
        <CardHeader>
          <button> Удалить</button>
          <CardTitle></CardTitle>

          <CardDescription></CardDescription>
          <CardContent>
            <div>
              <img alt="" />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
