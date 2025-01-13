import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface IProps {
  count: number;
  setPage: (val: ((value: number) => number) | number) => void;
  searchParams: URLSearchParams;
  setSearchParams: (val: {}) => void;
  page: number;
}
const PaginationComponent = ({ page, setPage, count,searchParams, setSearchParams }: IProps) => {
  const handleChangePage = (item: number) => {
    setPage(item);
    searchParams.set("page", `${item}`);
    setSearchParams(searchParams);
  }
  const handleNextPage = () => {
    if (page === count) return;
    searchParams.set("page", (page + 1).toString());
    setSearchParams(searchParams);
    setPage((prev) => prev + 1);
  }
  const handlePrevPage = () => {
    if (page === 1) return;
    searchParams.set("page", (page - 1).toString());
    setSearchParams(searchParams);
    setPage((prev) => prev - 1);
  }

  return (
    <div className="flex justify-items-center justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="cursor-pointer" onClick={handlePrevPage} />
          </PaginationItem>
          {
            Array.from(Array(count + 1).keys()).slice(count <= 3 ? 1 : (page <= count - 2 ? page : page - 2), page + 3).map((item, i) => {
              return (
                <PaginationItem key={i}>
                  <PaginationLink isActive={page == item} className="rounded-full cursor-pointer" onClick={() => handleChangePage(item)}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              )
            })
          }
          <PaginationItem className={page >= count - 3 ? "hidden" : ""}>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive={page == count} className={page > count - 3 ? "hidden" : "rounded-full cursor-pointer"} onClick={() => { setSearchParams({ page: count }); setPage(count);}}>
              {count}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationComponent
