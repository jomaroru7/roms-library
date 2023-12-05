import { Videoconsole, PostRom, getRomsArgs } from '../types';
import { getApiHost } from "./";

export const getRoms = async (response: Response, videoconsoles: Videoconsole[]) => {
    const data = await response.json();
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

export const getRomsResponse = async ({ videoconsoles, termFilter, pageFilter, videoconsolesFilter }: getRomsArgs = {videoconsoles: []}) => {
    const consoleFilter: string | undefined = videoconsolesFilter ? getConsolesIdsForQuery(videoconsolesFilter, videoconsoles) : undefined;
    const parameters = '?acf_format=standard' +
        (pageFilter ? '&page=' + pageFilter : '') +
        (consoleFilter ? '&console=' + consoleFilter : '') +
        (termFilter ? '&search=' + termFilter : '');
    const url = getApiHost() + '/wp-json/wp/v2/rom/' + parameters;
    const resp = fetch(url)
        .then((response) => {return response})
        .catch((error) => {throw error});
    return resp;
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