import { FormEvent } from "react";
import { GetNewRoms } from "../../types"
import { VideoconsoleFilterGrid } from "../";
import { useFilterRoms } from "../../hooks";

interface RomsFilterProps {
    getNewRoms: GetNewRoms,
}

export const RomsFilter: React.FC<RomsFilterProps> = ({ getNewRoms }) => {
    const { term, videoconsole, page, arrayVideoconsoles,  setFilters, resetFilters } = useFilterRoms();

    const onSetVideoconsole = (videoconsole: string) => {
        setFilters({ videoconsole })
    }
    
    const onSetTerm = (term: string) => {
        setFilters({ term })
    }

    const onSetPage = (page: number) => {
        setFilters({ page })
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const args = {
            term,
            videoconsole,
            page
        };
        getNewRoms(args);
    }

    return (
        <form onSubmit={onSubmit}>
            <VideoconsoleFilterGrid arrayVideoconsoles={arrayVideoconsoles} onSetVideoconsole={(value) => onSetVideoconsole(value)} />
            <input type="submit" value="Search" />
        </form>
    )
}
