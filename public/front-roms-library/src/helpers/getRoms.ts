import { Console, PostRom, getRomsArgs } from '../types';
import { getConsoles, getApiHost} from "./";

export const getRoms = async ({search, page, videoconsole}: getRomsArgs = {}) => {
    const consoles: Console[] = await getArrayConsolesImage();
    const consoleFilter: number | undefined = videoconsole ? getConsoleIdByName(videoconsole, consoles) : undefined;
    const parameters = '?acf_format=standard' +
        (page ? '&page=' + page : '') +
        (consoleFilter ? '&console=' + consoleFilter : '') +
        (search ? '&search=' + search : '');
    const url = getApiHost() + '/wp-json/wp/v2/rom/' + parameters;
    const resp = await fetch(url);
    const data = await resp.json();
    const roms = data.map((rom: PostRom) => {
        const romConsoleId = rom.console[0];
        const romConsoleImage = false !== rom.acf.rom_image ? rom.acf.rom_image : getConsoleById(romConsoleId, consoles);
        return {
            id: rom.id,
            title: rom.title.rendered,
            description: rom.content.rendered,
            console: rom.console,
            image: romConsoleImage,
        }
    })
    return roms;
}

const getArrayConsolesImage = async () => {
    const consoles = await getConsoles();
    const cons = consoles.map((console: Console) => {
        return {
            id: console.id,
            name: console.name,
            image: console.image,
        }
    })
    return cons;
}

const getConsoleById = (id: number, arrayConsoles: Console[]) => {
    const videoconsole = arrayConsoles.find((videoconsole) => id === videoconsole.id);
    return videoconsole?.image;
}

const getConsoleIdByName = (consoleName: string, arrayConsoles: Console[]) => {
    const videoconsole = arrayConsoles.find((videoconsole) => consoleName.toLowerCase() === videoconsole.name.toLowerCase());
    return videoconsole?.id;
}