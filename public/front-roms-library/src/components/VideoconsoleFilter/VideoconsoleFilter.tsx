import { useState } from "react";
import { OnSwitchVideoconsolesSelected, Videoconsole } from "../../types"

interface VideoconsoleFilterProps {
    videoconsole: Videoconsole,
    onSwitchVideoconsolesSelected: OnSwitchVideoconsolesSelected
}

export const VideoconsoleFilter: React.FC<VideoconsoleFilterProps> = ({ videoconsole, onSwitchVideoconsolesSelected}) => {

    const [inputChecked, setInputChecked] = useState<boolean>(true);
    const [classnameInput, setClassnameInput] = useState<string>('checkbox-card');
    
    const onInputChange = () => {
        setInputChecked(!inputChecked);
        onSwitchVideoconsolesSelected(videoconsole, !inputChecked);
        if(inputChecked){
            setClassnameInput('checkbox-card checkbox-unchecked')
        }else{
            setClassnameInput('checkbox-card')
        }
    }

    return (
        <div className={classnameInput}>
            <label className="checkbox-span" htmlFor={videoconsole.slug}>{videoconsole.name}</label>
            <input
                type="checkbox"
                name={videoconsole.name}
                id={videoconsole.slug}
                onChange={onInputChange}
                checked={inputChecked}
            />
        </div>
    )
}
