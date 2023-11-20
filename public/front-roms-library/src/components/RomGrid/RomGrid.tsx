import { useEffect, useState } from "react";
import { getRoms } from "../../helpers/getRoms";
import { Rom } from "../../types";

interface RomGridProps {
    key: String,
    romName: String
}

export const RomGrid: React.FC<RomGridProps> = ({ key, romName }) => {
    const [roms, setRoms] = useState<Rom[]>([]);

    const getNewRoms = async() => {
        const roms = await getRoms();
        setRoms(roms);
    }

    useEffect(() => {
        getNewRoms();
    }, []);


    return (
        <>
            {
                roms.map(({id, title, description, image}) => {
                    return (
                        <div key={id}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <img alt={title} src={image}/>
                        </div>
                    )
                })
            }

        </>
    )
}
