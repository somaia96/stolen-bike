import { BikeIcon } from "lucide-react"

const NoBike = () => {
  return (
    <h2 className="flex flex-col items-center justify-center h-96 text-center text-5xl font-semibold gap-3">No Bikes Found <BikeIcon size={90} /></h2>
  )
}

export default NoBike
