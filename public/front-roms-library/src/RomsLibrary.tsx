// import { AddRom } from './components/AddRom/AddRom';
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { RomsGrid } from "./components/RomsGrid/RomsGrid";
import { useFetchRoms } from "./hooks/useFetchRoms";


export const RomsLibrary = () => {
  const {roms, getNewRoms, isLoading} = useFetchRoms();

  // const onNewRom = (newRom: Rom) => {
  //   if (roms.find((rom) => newRom.title.toLowerCase() === rom.title.toLowerCase())) return;
  //   setRoms([...roms, newRom]);
  // }


  return (
    <>
      {/* <AddRom
        onNewRom={(value) => onNewRom(value)}
      /> */}

      {
        isLoading ? <LoadingSpinner/> : null
      }
      
      <RomsGrid roms={roms} />

    </>
  );
}
