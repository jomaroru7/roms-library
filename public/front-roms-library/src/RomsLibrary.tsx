import { useEffect, useState } from "react";
// import { AddRom } from './components/AddRom/AddRom';
import { Rom } from "./types";
import { RomsGrid } from "./components/RomsGrid/RomsGrid";
import { getRoms } from "./helpers/getRoms";


export const RomsLibrary = () => {

  const [roms, setRoms] = useState<Rom[]>([]);

  // const onNewRom = (newRom: Rom) => {
  //   if (roms.find((rom) => newRom.title.toLowerCase() === rom.title.toLowerCase())) return;
  //   setRoms([...roms, newRom]);
  // }

  const getNewRoms = async() => {
      const newRoms = await getRoms();
      setRoms(newRoms);
  }

  useEffect(() => {
      getNewRoms();
  }, []);

  return (
    <>
      {/* <AddRom
        onNewRom={(value) => onNewRom(value)}
      /> */}

      <RomsGrid roms={roms} />

    </>
  );
}
