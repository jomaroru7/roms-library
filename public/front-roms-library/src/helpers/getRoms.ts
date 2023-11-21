import { Console, PostRom } from '../types';
import { getApiHost } from './getApiHost';
import { getConsoles } from "./getConsoles";

export const getRoms = async () => {
    const url = getApiHost() + '/wp-json/wp/v2/rom/?acf_format=standard'
    const resp = await fetch(url);
    const data = await resp.json();
    const consoles: Console[] = await getArrayConsolesImage();
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
            image: console.image,
        }
    })
    return cons;
}

const getConsoleById = (id: number, arrayConsoles: Console[]) => {
    const console = arrayConsoles.find((console) => id === console.id);
    return console?.image;
}