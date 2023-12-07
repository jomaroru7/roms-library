import { FormEvent } from "react";
import { GetNewRoms, SetFilters, Videoconsole } from "../../types"
import { VideoconsoleFilterGrid } from "../";
interface RomsFilterProps {
    getNewRoms: GetNewRoms,
    termFilter?: string,
    videoconsolesFilter?: Videoconsole[],
    videoconsoles: Videoconsole[],
    setFilters: SetFilters,
}

export const RomsFilter: React.FC<RomsFilterProps> = ({ getNewRoms, termFilter, videoconsolesFilter, videoconsoles, setFilters }) => {

    const onSetVideoconsole = (arrayVideoconsoles: Videoconsole[]) => {
        setFilters({ videoconsolesFilter: arrayVideoconsoles })
    }
    
    const onSetTerm = (term: string) => {
        setFilters({ termFilter: term })
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const args = {
            videoconsoles,
            termFilter,
            videoconsolesFilter
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
