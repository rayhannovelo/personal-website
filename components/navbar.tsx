import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-5">
      <Card className="w-full shadow-xl">
        <CardHeader>
          <CardTitle>Nav</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Icon</p>
        </CardContent>
      </Card>
      <Card className="w-full shadow-xl">
        <CardHeader>
          <CardTitle>Nav</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Icon</p>
        </CardContent>
      </Card>
      <Card className="w-full shadow-xl">
        <CardHeader>
          <CardTitle>Nav</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Icon</p>
        </CardContent>
      </Card>
    </div>
  );
}
