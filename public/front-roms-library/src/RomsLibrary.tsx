// import { AddRom } from './components/AddRom/AddRom';
import { RomsGrid, LoadingSpinner, RomsFilter } from "./components";
import { RomsPagination } from "./components/RomsPagination/RomsPagination";
import { useFetchRoms } from "./hooks";


export const RomsLibrary = () => {
  const { roms, totalPages, getNewRoms, isLoading, filterRoms } = useFetchRoms();
  const { termFilter, videoconsolesFilter, videoconsoles, pageFilter, setFilters, resetFilters } = filterRoms;

  // const onNewRom = (newRom: Rom) => {
  //   if (roms.find((rom) => newRom.title.toLowerCase() === rom.title.toLowerCase())) return;
  //   setRoms([...roms, newRom]);
  // }

  const onChangePage = (newPage: number) => {
    setFilters({termFilter, videoconsolesFilter, pageFilter: newPage})
    getNewRoms({videoconsoles, pageFilter, videoconsolesFilter, termFilter})
  }

  return (
    <>
      {/* <AddRom
        onNewRom={(value) => onNewRom(value)}
      /> */}
      <RomsFilter getNewRoms={getNewRoms} termFilter={termFilter} videoconsolesFilter={videoconsolesFilter} videoconsoles={videoconsoles} setFilters={setFilters} />

      {
        isLoading && <LoadingSpinner />
      }

      <RomsGrid roms={roms} />

      <RomsPagination getNewRoms={getNewRoms} totalPages={totalPages} videoconsoles={videoconsoles} onChangePage={onChangePage} />

    </>
  );
}
