import { Videoconsole, PostRom, getRomsArgs } from '../types';
import { getApiHost } from "./";

export const getRoms = async ({ videoconsoles, termFilter: searchFilter, pageFilter, videoconsolesFilter }: getRomsArgs = {videoconsoles: []}) => {
    const consoleFilter: string | undefined = videoconsolesFilter ? getConsolesIdsForQuery(videoconsolesFilter, videoconsoles) : undefined;
    const parameters = '?acf_format=standard' +
        (pageFilter ? '&page=' + pageFilter : '') +
        (consoleFilter ? '&console=' + consoleFilter : '') +
        (searchFilter ? '&search=' + searchFilter : '');
    const url = getApiHost() + '/wp-json/wp/v2/rom/' + parameters;
    const resp = await fetch(url);
    const data = await resp.json();
    const roms = data.map((rom: PostRom) => {
        const romConsoleId = rom.console[0];
        const romConsoleImage = false !== rom.acf.rom_image ? rom.acf.rom_image : getConsoleImageById(romConsoleId, videoconsoles);
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

const getConsoleImageById = (id: number, arrayConsoles: Videoconsole[]) => {
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