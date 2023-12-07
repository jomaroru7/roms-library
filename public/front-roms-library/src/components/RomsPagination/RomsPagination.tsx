import { FormEvent, useEffect, useState } from "react";
import { GetNewRoms, OnChangePage, Videoconsole } from "../../types"

interface RomsPaginationProps {
  getNewRoms: GetNewRoms,
  totalPages: number,
  videoconsoles: Videoconsole[],
  onChangePage: OnChangePage
}

export const RomsPagination: React.FC<RomsPaginationProps> = ({ getNewRoms, totalPages, videoconsoles, onChangePage }) => {

  const [pages, setPages] = useState<[]>([]);

  const onClick:React.MouseEventHandler<HTMLLIElement> = (event: FormEvent) => {
    const page = Number((event.target as Element).id);
    getNewRoms({ pageFilter: page, videoconsoles })
    setPages(setNewPages(page));
  }

  useEffect(() => {
    const newPages = setNewPages(1);
    setPages(newPages);
  }, [totalPages])

  const setNewPages = (pageSelected: number) => {
    let newPages = [];
    for (var page = 1; page <= totalPages; page++) {
      if(pageSelected === page){
        newPages.push(<li id={page.toString()} className='pagination-number page-selected' key={page} >{page}</li>);
      }
      else {
        newPages.push(<li id={page.toString()} className='pagination-number' key={page} onClick={onClick}>{page}</li>);
      }
    }
    return newPages as [];
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {
          pages.map((page) => page)
        }
      </ul>

    </div>
  )
}
