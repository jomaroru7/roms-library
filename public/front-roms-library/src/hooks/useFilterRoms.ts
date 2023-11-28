import { useEffect, useState } from "react"
import { Videoconsole } from "../types";
import { getConsoles } from "../helpers";

interface setFiltersArgs {
    termFilter?: string,
    videoconsolesFilter?: Videoconsole[],
    pageFilter?: number
}

export const useFilterRoms = () => {
    const [termFilter, setTermFilter] = useState<string>();
    const [videoconsolesFilter, setVideoconsolesFilter] = useState<Videoconsole[]>();
    const [pageFilter, setPageFilter] = useState<number>();
    const [videoconsoles, setVideoconsoles] = useState<Videoconsole[]>([]);

    const setFilters = ({ termFilter, videoconsolesFilter, pageFilter }: setFiltersArgs) => {
        termFilter && setTermFilter(termFilter);
        videoconsolesFilter && setVideoconsolesFilter(videoconsolesFilter);
        pageFilter && setPageFilter(pageFilter);
    }

    const resetFilters = (filters?: string[]) => {
        (!filters || filters.find((filter) => 'term' === filter)) && setTermFilter(undefined);
        (!filters || filters.find((filter) => 'videoconsole' === filter)) && setVideoconsolesFilter(undefined);
        (!filters || filters.find((filter) => 'page' === filter)) && setPageFilter(undefined);
    }

    useEffect(()=>{
        getConsoles()
            .then( (videoconsoles) => setVideoconsoles(videoconsoles));
    }, [])

    return (
        {
            videoconsoles,
            termFilter,
            videoconsolesFilter,
            pageFilter,
            setFilters,
            resetFilters
        }
    )
}
