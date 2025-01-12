import { txtSlicer } from "../utils/functions";
import BikeSvg from "../assets/SVG/BikeSvg";
import { IBike } from "../interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface IProps {
  bike: IBike
}

export default function Bike({ bike }: IProps) {

  let timestamp = new Date(bike.date_stolen!);
  return (
    <Card className="overflow-hidden lg:max-w-[70%] m-auto w-full flex max-w-[24rem] my-3 md:max-w-[80%] md:h-56 flex-col md:flex-row">
      <CardHeader className="m-0 h-56 md:h-auto w-full md:w-1/4 shrink-0 bg-cover bg-center bg-gray-100 flex justify-center items-center">
        {bike.large_img ? <img
          src={bike.thumb}
          alt="card-image"
          className="h-full w-full object-cover bg-transparent"
        /> : <BikeSvg />}
      </CardHeader>
      <CardContent className="w-full md:w-1/2 p-6 space-y-3">
        <CardTitle className="text-gray-800">
          {txtSlicer(bike.title, 30)}
        </CardTitle>
        <CardDescription className="text-md">
          {bike.description ? txtSlicer(bike.description) : "No Description"}
        </CardDescription>
      </CardContent>
      <CardFooter className="w-auto p-6">
        <h6 className="font-bold text-gray-700 text-lg">
          Stolen at :
        </h6>
        <p className="text-gray-600">
          {timestamp ? timestamp.toUTCString() : "No Date"}
        </p>
        <h6 className="font-bold text-gray-700 text-lg">
          Location :
        </h6>
        <p className="text-gray-600">
          {bike.stolen_location ? bike.stolen_location : "Unknown Location"}
        </p>
      </CardFooter>
    </Card>
  );
}