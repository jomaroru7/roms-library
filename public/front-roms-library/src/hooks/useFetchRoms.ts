import { useEffect, useState } from "react";
import { getRoms, getRomsResponse, getTotalPages } from "../helpers";
import { Rom, getRomsArgs } from "../types";
import { useFilterRoms } from "./useFilterRoms";

export const useFetchRoms = () => {
    const [roms, setRoms] = useState<Rom[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalPages, setTotalPages] = useState<number>(1);
    const filterRoms = useFilterRoms();
    const { videoconsoles, termFilter, videoconsolesFilter, pageFilter, setFilters, resetFilters } = filterRoms;

    const getNewRoms = async (getRomsArgs: getRomsArgs = { videoconsoles }) => {
        getRomsArgs = {...getRomsArgs, videoconsolesFilter}
        const newRoms = await getRomsResponse(getRomsArgs);
        setRoms(await getRoms(newRoms, videoconsoles));
        setTotalPages(await getTotalPages(newRoms).then());
        setIsLoading(false);
    }

    useEffect(() => {
        getNewRoms();
    }, [videoconsoles]);

    return {
        // roms: roms, <--- This is the same than below
        roms,
        totalPages,
        getNewRoms,
        isLoading,
        filterRoms
    }
}
