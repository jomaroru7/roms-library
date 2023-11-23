import { Videoconsole, OnSetVideoconsole } from "../../types";

interface VideoconsoleFilterProps {
    arrayVideoconsoles?: Videoconsole[],
    onSetVideoconsole: OnSetVideoconsole,
}

export const VideoconsoleFilter: React.FC<VideoconsoleFilterProps> = ({arrayVideoconsoles}, onSetVideoconsole) => {
    console.log(arrayVideoconsoles);

    return (
        <div>
            {
                arrayVideoconsoles?.map(({name, id}) => (
                    <>
                        <label htmlFor={name}>{name}</label>
                        <input key={id} type="checkbox" name={name} id={id.toString()} />
                    </>
                        
                ))
            }
        </div>
    )
}
