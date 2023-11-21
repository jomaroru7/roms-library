import { Rom } from "../../types";
import { RomItem } from "../RomItem/RomItem";

interface RomsGridProps {
    roms: Rom[]
}

export const RomsGrid: React.FC<RomsGridProps> = (roms) => {
    
    return (
        <div className="roms-grid">
            {
                roms.roms.map((rom) =>
                    <RomItem key={rom.id} {...rom} />
                )
            }

        </div>
    )
}
