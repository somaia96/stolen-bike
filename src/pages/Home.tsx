import HomeSkeleton from "@/Skeleton/HomeSkeleton"
import Bike from "../components/Bike"
import { IBike } from "../interfaces"
import instance from "@/api/instance"
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const { isLoading, data: bikes } = useQuery({
    queryKey: [`bikesData`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search?page=1&per_page=10`)
      return data.bikes
    }
  })

  if (isLoading) return <HomeSkeleton />

  return (
    <div className="container space-y-3 m-auto my-5">
      {
        bikes.map((bike: IBike) => <Bike key={bike.id} bike={bike} />)
      }
    </div>
  )
}

export default Home