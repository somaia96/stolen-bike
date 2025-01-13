import { ServerCrashIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const Alerting = () => {
  return (
    <Alert className="my-5 bg-red-100 w-11/12 md:w-6/12 mx-auto p-3 font-bold text-3xl" variant="destructive">
      <ServerCrashIcon size={50} />
      <AlertTitle className="font-bold mb-2 ml-10"> Error 500 !</AlertTitle>
      <AlertDescription className="text-lg ml-10">Internal Server Error .</AlertDescription>
    </Alert>
  )
}

export default Alerting
