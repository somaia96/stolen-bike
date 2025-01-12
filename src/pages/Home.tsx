import Bike from "../components/Bike"
import { useEffect, useState } from "react"
import { IBike } from "../interfaces"

const Home = () => {
  const [bikes, setBikes] = useState<IBike[]>([])

  useEffect(() => {
    try {
      (async()=>{
       let res = await(await fetch(`https://bikeindex.org/api/v3/search?page=1&per_page=10`)).json()
        setBikes(res.bikes);
     })()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  return (
    <div className="container space-y-3 m-auto">
      {
        bikes.map((bike)=><Bike key={bike.id} bike={bike} />)
      }
      
    </div>
  )
}

export default Home
