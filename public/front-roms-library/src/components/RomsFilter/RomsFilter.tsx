import { FormEvent } from "react";
import { GetNewRoms, Videoconsole } from "../../types"
import { VideoconsoleFilterGrid } from "../";
import { useFilterRoms } from "../../hooks";

interface RomsFilterProps {
    getNewRoms: GetNewRoms,
}

export const RomsFilter: React.FC<RomsFilterProps> = ({ getNewRoms }) => {
    const { termFilter, videoconsolesFilter, pageFilter, videoconsoles,  setFilters, resetFilters } = useFilterRoms();

    const onSetVideoconsole = (arrayVideoconsoles: Videoconsole[]) => {
        setFilters({ videoconsolesFilter: arrayVideoconsoles })
    }
    
    const onSetTerm = (term: string) => {
        setFilters({ termFilter: term })
    }

    const onSetPage = (page: number) => {
        setFilters({ pageFilter: page })
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const args = {
            videoconsoles,
            termFilter,
            videoconsolesFilter,
            pageFilter
        };
        getNewRoms(args);
    }

    return (
        <div className="roms-filter-container">
            <form className="roms-filter-form" onSubmit={onSubmit}>
                <div className="videoconsole-filter-container">
                    <h2 className="videoconsole-title">Videoconsole</h2>
                    <VideoconsoleFilterGrid arrayVideoconsoles={videoconsoles} onSetVideoconsole={onSetVideoconsole} />
                </div>
                <input className="roms-filter-submit" type="submit" value="Search" />
            </form>
        </div>
        
    )
}
