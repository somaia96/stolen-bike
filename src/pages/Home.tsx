import HomeSkeleton from "@/Skeleton/HomeSkeleton"
import Bike from "../components/Bike"
import { IBike } from "../interfaces"
import instance from "@/api/instance"
import { useQuery } from '@tanstack/react-query'
import Alert from "@/components/Alert"
import { KeyboardEvent, useState } from "react"
import PaginationComponent from "@/components/Paginition"
import { BikeIcon, SearchIcon } from "lucide-react"
import NoBike from "@/components/NoBike";
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams({ page: "1", query: query });
  const [page, setPage] = useState(+searchParams.get("page")!);
  // Count Of Pages
  const { error: countError, isLoading: loadingCount, data: count } = useQuery({
    queryKey: [`countData_${query}`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search/count?location=Munich&query=${query}&stolenness=proximity`)
      return data.proximity
    }
  })
  // Search By Page Number & Title || All Bikes Information
  const { error, isLoading, data: bikes } = useQuery({
    queryKey: [`bikesData_${page + query}`],
    queryFn: async () => {
      const { data } = await instance.get(`/v3/search?location=Munich&query=${query}&page=${page}&per_page=10&stolenness=proximity`)
      return data.bikes
    }
  })

  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      const target = e.target as HTMLTextAreaElement;
      setQuery(target.value)
      searchParams.set("query", `${target.value}`)
      setPage(1);
      searchParams.set("page", `1`);
      setSearchParams(searchParams)
    }
  }

  if (isLoading || loadingCount) return <HomeSkeleton />

  if (error || countError) return <Alert />

  return (
    <div className="container space-y-3 my-5 w-11/12 md:w-10/12 max-w-[24rem] md:max-w-[80%] lg:max-w-[70%] m-auto">
      <h1 className="text-5xl font-semibold my-5 justify-center items-center gap-3 flex text-gray-800">Stolen Bikes <BikeIcon className="text-gray-800" size={40} /> </h1>
      <div className="relative">
        <p className="text-sm text-red-500 absolute top-1/2 -translate-y-1/2 right-3">Press Enter To Search</p>
        <input onKeyDown={onSearch} className="bg-gray-100 rounded-md w-full outline-gray-200 hover:outline-gray-200 text-gray-800 px-10 py-2" type="text" name="text" id="text" placeholder="Search By Title" />
        <SearchIcon className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
      </div>
      {bikes.length ? (<>
        <div className="flex justify-between items-center text-gray-800">
          <h2 className="text-lg">Stolen Bikes : <span className="font-semibold">{count}</span> Bikes</h2>
          <Link onClick={()=>window.location.reload()} to={"/"}>Refresh Result</Link>
        </div>
        <div>
          {bikes.map((bike: IBike) => <Bike key={bike.id} bike={bike} />)}
        </div>
        {count! > 10 ? <PaginationComponent searchParams={searchParams} setSearchParams={setSearchParams} page={page} setPage={setPage} count={Math.ceil(count/10)} />:null}</>)
        : <NoBike />}
    </div>
  )
}

export default Home