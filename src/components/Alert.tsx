import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const Alerting = () => {
  return (
    <Alert className="my-5 bg-red-100 w-11/12 md:w-6/12 mx-auto p-3 font-bold text-3xl" variant="destructive">
      <AlertCircle className="h-5 w-5" />
      <AlertTitle className="font-bold mb-2">Ops !</AlertTitle>
      <AlertDescription>Something Went Wrong .</AlertDescription>
    </Alert>
  )
}

export default Alerting
