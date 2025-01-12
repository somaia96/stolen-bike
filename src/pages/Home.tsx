import Bike from "../components/Bike"
import { IBike } from "../interfaces"
import instance from "@/api/instance"
import { useQuery } from '@tanstack/react-query'

const Home = () => {

  const { data:bikes } = useQuery({
    queryKey: [`bikesData`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search?page=11001&per_page=10`)
      return data.data
    }
  })

  return (
    <div className="container space-y-3 m-auto">
      {
        bikes.map((bike:IBike)=><Bike key={bike.id} bike={bike} />)
      }
      
    </div>
  )
}

export default Home
