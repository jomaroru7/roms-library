import { Videoconsole, PostRom, getRomsArgs } from '../types';
import { getConsoles, getApiHost } from "./";

export const getRoms = async ({ term: search, page, videoconsoles }: getRomsArgs = {}) => {
    const consoles: Videoconsole[] = await getArrayConsoles();
    const consoleFilter: string | undefined = videoconsoles ? getConsolesIdsForQuery(videoconsoles, consoles) : undefined;
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

const getArrayConsoles = async () => {
    return await getConsoles();
}

const getConsoleById = (id: number, arrayConsoles: Videoconsole[]) => {
    const videoconsole = arrayConsoles.find((videoconsole) => id === videoconsole.id);
    return videoconsole?.image;
}

const getConsolesIdsForQuery = (consoles: Videoconsole[], arrayConsoles: Videoconsole[]) => {
    let arrayIds: number[] = [];
    let ids: string = '';

    consoles.forEach((videoconsole) => {
        const videoconsoleId = getConsoleIdByName(videoconsole.name, arrayConsoles);
        'number' === typeof (videoconsoleId) && arrayIds.push(videoconsoleId)
    })

    arrayIds.forEach((id, index) => {
        ids += index === 0 ? id.toString() : ',' + id.toString();
    })

    return ids !== '' ? ids : undefined;
}

const getConsoleIdByName = (consoleName: string, arrayConsoles: Videoconsole[]) => {
    const videoconsole = arrayConsoles.find((videoconsole) => consoleName.toLowerCase() === videoconsole.name.toLowerCase());
    return videoconsole ? videoconsole.id : undefined;
}