import { useState } from "react";
import { AddRom } from './components/AddRom/AddRom';
import { Rom } from "./types";
import { RomGrid } from "./components/RomGrid/RomGrid";


export const RomsLibrary = () => {

  const [roms, setRoms] = useState<Array<Rom>>([]);

  const onNewRom = (newRom: Rom) => {
    if (roms.find((rom) => newRom.title.toLowerCase() === rom.title.toLowerCase())) return;
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
                key={rom.id.toString()} 
                romName = {rom.title}
              />
            )
          })
        }

      </ol>

    </>
  );
}
