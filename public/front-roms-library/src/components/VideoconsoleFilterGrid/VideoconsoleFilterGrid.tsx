import { useEffect, useState } from "react";
import { Videoconsole, OnSetVideoconsole } from '../../types';
import { VideoconsoleFilter } from "..";

interface VideoconsoleFilterGridProps {
    arrayVideoconsoles: Videoconsole[],
    onSetVideoconsole: OnSetVideoconsole,
}

export const VideoconsoleFilterGrid: React.FC<VideoconsoleFilterGridProps> = ({ arrayVideoconsoles , onSetVideoconsole}) => {

    const [videoconsolesSelected, setVideoconsolesSelected] = useState<Videoconsole[]>(arrayVideoconsoles);

    const createNewVideoconsolesArrayWithoutElement = (videoconsoleToRemove: Videoconsole)=>{
        return videoconsolesSelected.filter((videoconsole) => (videoconsole.id !== videoconsoleToRemove.id))
    }

    const onSwitchVideoconsolesSelected = (videoconsole: Videoconsole, isConsoleFiltered: boolean) => {
        if (isConsoleFiltered){
            setVideoconsolesSelected([videoconsole, ...videoconsolesSelected])
        }else{
            setVideoconsolesSelected(createNewVideoconsolesArrayWithoutElement(videoconsole))
        }
    }

    useEffect(() => {
        onSetVideoconsole(videoconsolesSelected);
    }, [videoconsolesSelected]) 

    useEffect(() => {
        setVideoconsolesSelected(arrayVideoconsoles);
        onSetVideoconsole(arrayVideoconsoles);
    }, [arrayVideoconsoles]) 

    return (
        <div className="videoconsole-filter-grid">
            {
                arrayVideoconsoles.map((videoconsole) => {
                    return (
                        <VideoconsoleFilter key={videoconsole.id} videoconsole={videoconsole} onSwitchVideoconsolesSelected={ onSwitchVideoconsolesSelected }/>
                    )
                })
            }
        </div>
    )
}
