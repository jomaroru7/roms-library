import { useEffect, useState } from "react";
import { getRoms, getRomsResponse } from "../helpers";
import { Rom, getRomsArgs } from "../types";
import { useFilterRoms } from "./useFilterRoms";

export const useFetchRoms = () => {
    const [roms, setRoms] = useState<Rom[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { videoconsoles } = useFilterRoms();

    const getNewRoms = async (getRomsArgs: getRomsArgs = { videoconsoles }) => {
        const newRoms = await getRomsResponse(getRomsArgs);
        setRoms(await getRoms(newRoms, videoconsoles));
        setIsLoading(false);
    }

    useEffect(() => {
        getNewRoms();
    }, [videoconsoles]);

    return {
        // roms: roms, <--- This is the same than below
        roms,
        getNewRoms,
        isLoading
    }
}
