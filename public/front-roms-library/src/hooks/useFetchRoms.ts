import { useEffect, useState } from "react";
import { getRoms } from "../helpers";
import { Rom, getRomsArgs } from "../types";

export const useFetchRoms = () => {
    const [roms, setRoms] = useState<Rom[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getNewRoms = async(getRomsArgs: getRomsArgs = {}) => {
        const newRoms = await getRoms(getRomsArgs);
        setRoms(newRoms);
        setIsLoading(false);
    }
  
    useEffect(() => {
        getNewRoms();
    }, []);
    
    return{
        // roms: roms, <--- This is the same than below
        roms,
        getNewRoms,
        isLoading
    }
}
