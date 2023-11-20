interface RomGridProps {
    key: String,
    romName: String
}

const getRoms = async () => {
    const url = 'https://loc-www.jomaroru.es/wp-json/wp/v2/rom/'
    const resp = await fetch(url);
    console.log(await resp.json())
}

getRoms()

export const RomGrid: React.FC<RomGridProps> = ({key, romName}) => {
  return (
    <>
        <h3>{romName}</h3>
        <p>Hello world</p>
    </>
  )
}
