import { FormEvent } from "react";
import { GetNewRoms, Videoconsole } from "../../types"
import { VideoconsoleFilterGrid } from "../";
import { useFilterRoms } from "../../hooks";

interface RomsFilterProps {
    getNewRoms: GetNewRoms,
}

export const RomsFilter: React.FC<RomsFilterProps> = ({ getNewRoms }) => {
    const { term, videoconsoles, page, arrayVideoconsoles,  setFilters, resetFilters } = useFilterRoms();

    const onSetVideoconsole = (videoconsoles: Videoconsole[]) => {
        setFilters({ videoconsoles })
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
            videoconsoles,
            page
        };
        getNewRoms(args);
    }

    return (
        <div className="roms-filter-container">
            <form className="roms-filter-form" onSubmit={onSubmit}>
                <div className="videoconsole-filter-container">
                    <h2 className="videoconsole-title">Videoconsole</h2>
                    <VideoconsoleFilterGrid arrayVideoconsoles={arrayVideoconsoles} onSetVideoconsole={onSetVideoconsole} />
                </div>
                <input className="roms-filter-submit" type="submit" value="Search" />
            </form>
        </div>
        
    )
}
