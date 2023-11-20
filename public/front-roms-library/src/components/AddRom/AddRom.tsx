import { FormEvent, useState } from "react"
import { OnNewRom } from "../../types";

interface AddRomProps {
  onNewRom: OnNewRom;
}

export const AddRom: React.FC<AddRomProps> = ({ onNewRom }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (0 >= inputValue.trim().length) return;
    onNewRom({
      id: 134,
      title: inputValue.trim(),
      description: '',
      console: 'GBA',
      image: ''
    });
    setInputValue('');
  }

  return (
    <>
      {/* <form onSubmit={(event) => onSubmit(event)}> This form is as valid as the form below*/}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add rom"
          value={inputValue}
          // onChange={(event) => {
          //   onInputChange(event.currentTarget.value);
          // }}
          onChange={onInputChange}
        />
      </form>

    </>
  )
}
