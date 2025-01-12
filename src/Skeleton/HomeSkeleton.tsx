import { Skeleton } from "@/components/ui/skeleton"
const HomeSkeleton = ({ noPic = true }: { noPic?: boolean }) => {
    return (
        <div className="container space-y-3 m-auto my-5">
            {Array.from({ length: 10 }, () => <Skeleton className="m-auto w-[70%] md:space-y-0 rtl:space-x-reverse md:flex md:items-center">
                {noPic && <Skeleton className="bg-gray-300 flex items-center justify-center w-full h-48 rounded sm:w-96">
                    <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </Skeleton>}
                <div className="w-full flex p-5">
                    <div className="w-1/2">
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-48 mb-4" />
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-80 mb-4" />
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-80 mb-4" />
                    </div>
                    <div>
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-36 mb-4" />
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-48 mb-4" />
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-36 mb-4" />
                        <Skeleton className="bg-gray-300 h-2.5 rounded-full w-48 mb-4" />
                    </div>
                </div>
            </Skeleton>)}
        </div>
    )
}

export default HomeSkeleton
