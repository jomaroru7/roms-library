// import { AddRom } from './components/AddRom/AddRom';
import { RomsGrid, LoadingSpinner, RomsFilter } from "./components";
import { RomsPagination } from "./components/RomsPagination/RomsPagination";
import { useFetchRoms, useFilterRoms } from "./hooks";


export const RomsLibrary = () => {
  const {videoconsoles} = useFilterRoms();
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
      <RomsFilter getNewRoms={getNewRoms}/>

      {
        isLoading && <LoadingSpinner/>
      }
      
      <RomsGrid roms={roms} />

      <RomsPagination getNewRoms={getNewRoms}/>

    </>
  );
}
