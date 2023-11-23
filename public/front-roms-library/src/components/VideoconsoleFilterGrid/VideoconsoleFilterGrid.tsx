import { useState } from "react";
import { Videoconsole, OnSetVideoconsole } from '../../types';
import { VideoconsoleFilter } from "..";

interface VideoconsoleFilterGridProps {
    arrayVideoconsoles: Videoconsole[],
    onSetVideoconsole: OnSetVideoconsole,
}

export const VideoconsoleFilterGrid: React.FC<VideoconsoleFilterGridProps> = ({ arrayVideoconsoles }, onSetVideoconsole) => {

    const [videoconsolesSelected, setVideoconsolesSelected] = useState<Videoconsole[]>(arrayVideoconsoles)
    
    const isVideoconsoleSelected = (videoconsoleId: number) => {
        return videoconsolesSelected.some((videconsole) => ( videoconsoleId===videconsole.id));
    }

    const createNewVideoconsolesArrayWithoutElement = (videoconsoleToRemove: Videoconsole)=>{
        return videoconsolesSelected.filter((videoconsole) => (videoconsole !== videoconsoleToRemove))
    }

    const onSwitchVideoconsolesSelected = (videoconsole: Videoconsole, isConsoleFiltered: boolean) => {
        if (isConsoleFiltered && !isVideoconsoleSelected(videoconsole.id)){
            setVideoconsolesSelected([videoconsole, ...videoconsolesSelected])
        }

        if (!isConsoleFiltered && isVideoconsoleSelected(videoconsole.id)){
            setVideoconsolesSelected(createNewVideoconsolesArrayWithoutElement(videoconsole))
        }
        
        onSetVideoconsole(videoconsolesSelected);
    }

    return (
        <div>
            {
                arrayVideoconsoles.map((videoconsole) => {
                    return (
                        <VideoconsoleFilter key={videoconsole.id} videoconsole={videoconsole} onSwitchVideoconsolesSelected={onSwitchVideoconsolesSelected}/>
                    )
                }
                )
            }
        </div>
    )
}
