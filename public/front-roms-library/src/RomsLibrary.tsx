// import { AddRom } from './components/AddRom/AddRom';
import { RomsGrid, LoadingSpinner } from "./components";
import { useFetchRoms } from "./hooks";


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
        isLoading && <LoadingSpinner/>
      }
      
      <RomsGrid roms={roms} />

    </>
  );
}
