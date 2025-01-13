import HomeSkeleton from "@/Skeleton/HomeSkeleton"
import Bike from "../components/Bike"
import { IBike } from "../interfaces"
import instance from "@/api/instance"
import { useQuery } from '@tanstack/react-query'
import Alert from "@/components/Alert"
import { useState } from "react"
import PaginationComponent from "@/components/Paginition"

const Home = () => {
  const [page, setPage] = useState(1);
  const [query,] = useState("");

  const { data : count  } = useQuery({
    queryKey: [`countData_${query}`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search/count?query=${query}&stolenness=all`)
      return data.stolen/10
    }
  })

  const { error, isLoading, data: bikes } = useQuery({
    queryKey: [`bikesData_${page+query}`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search?query=${query}&page=${page}&per_page=10`)
      return data.bikes
    }
  })

  if (isLoading) return <HomeSkeleton />

  if (error) return <Alert />

  return (
    <div className="container space-y-3 m-auto my-5">
      {
        bikes.map((bike: IBike) => <Bike key={bike.id} bike={bike} />)
      }
      <PaginationComponent page={page} setPage={setPage} count={count!} />
    </div>
  )
}

export default Home