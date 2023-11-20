import { useState } from "react";
import { AddRom } from './components/AddRom/AddRom';
import { Rom } from "./types";
import { RomGrid } from "./components/RomGrid/RomGrid";


export const RomsLibrary = () => {

  const [roms, setRoms] = useState<Array<Rom>>([{ romName: 'Final fantasy' }, { romName: 'Pokemon rojo' }]);

  const onNewRom = (newRom: Rom) => {
    if (roms.find((rom) => newRom.romName.toLowerCase() === rom.romName.toLowerCase())) return;
    setRoms([...roms, newRom]);
  }

  return (
    <>
      <h1>Roms Library</h1>
      <AddRom
        onNewRom={(value) => onNewRom(value)}
      />
      <ol>
        {
          roms.map((rom) => {
            return (
              <RomGrid 
                key={rom.romName} 
                romName = {rom.romName}
              />
            )
          })
        }

      </ol>

    </>
  );
}
