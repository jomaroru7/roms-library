import { useEffect, useState } from "react"
import { Videoconsole, getRomsArgs } from "../types";
import { getConsoles } from "../helpers";

export const useFilterRoms = () => {
    const [term, setTerm] = useState<string>();
    const [videoconsole, setVideoconsole] = useState<string>();
    const [page, setPage] = useState<number>();
    const [arrayVideoconsoles, setArrayVideoconsoles] = useState<Videoconsole[]>();

    const setFilters = ({ term, videoconsole, page }: getRomsArgs) => {
        term && setTerm(term);
        videoconsole && setVideoconsole(videoconsole);
        page && setPage(page);
    }

    const resetFilters = (filters?: string[]) => {
        (!filters || filters.find((filter) => 'term' === filter)) && setTerm(undefined);
        (!filters || filters.find((filter) => 'videoconsole' === filter)) && setVideoconsole(undefined);
        (!filters || filters.find((filter) => 'page' === filter)) && setPage(undefined);
    }

    const getNewArrayVideoconsoles = async() => {
        const arrayNewVideoconsoles = await getConsoles();
        setArrayVideoconsoles(arrayNewVideoconsoles);
    }
  
    useEffect(() => {
        getNewArrayVideoconsoles();
    }, []);

    return (
        {
            term,
            videoconsole,
            page,
            arrayVideoconsoles,
            setFilters,
            resetFilters
        }
    )
}
