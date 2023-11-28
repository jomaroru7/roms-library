import { Rom } from "../../types";
import { RomItem } from "../";

interface RomsGridProps {
    roms: Rom[]
}

export const RomsGrid: React.FC<RomsGridProps> = ({roms}) => {
    
    return (
        <div className="roms-grid">
            {
                roms.map((rom) =>
                    <RomItem key={rom.id} {...rom} />
                )
            }

        </div>
    )
}
