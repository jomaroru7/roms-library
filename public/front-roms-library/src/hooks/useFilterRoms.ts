import { useEffect, useState } from "react"
import { Videoconsole, getRomsArgs } from "../types";
import { getConsoles } from "../helpers";

export const useFilterRoms = () => {
    const [term, setTerm] = useState<string>();
    const [videoconsoles, setVideoconsoles] = useState<Videoconsole[]>();
    const [page, setPage] = useState<number>();
    const [arrayVideoconsoles, setArrayVideoconsoles] = useState<Videoconsole[]>([]);

    const setFilters = ({ term, videoconsoles, page }: getRomsArgs) => {
        term && setTerm(term);
        videoconsoles && setVideoconsoles(videoconsoles);
        page && setPage(page);
    }

    const resetFilters = (filters?: string[]) => {
        (!filters || filters.find((filter) => 'term' === filter)) && setTerm(undefined);
        (!filters || filters.find((filter) => 'videoconsole' === filter)) && setVideoconsoles(undefined);
        (!filters || filters.find((filter) => 'page' === filter)) && setPage(undefined);
    }

    useEffect(()=>{
        getConsoles()
            .then( (videoconsoles) => setArrayVideoconsoles(videoconsoles));
    }, [])

    return (
        {
            term,
            videoconsoles,
            page,
            arrayVideoconsoles,
            setFilters,
            resetFilters
        }
    )
}
