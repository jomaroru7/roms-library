import { Videoconsole, PostConsole } from "../types";
import { getApiHost } from "./";

export const getConsoles = async() => {
    // TODO - In the future could be more than 10 consoles. Control pagination.
    const url = getApiHost() + '/wp-json/wp/v2/console/?acf_format=standard'
    const resp = await fetch(url);
    const data = await resp.json();
    const consoles: Videoconsole[] = data.map((console: PostConsole) => {
        return {
            id: console.id,
            name: console.name,
            description: console.description,
            slug: console.slug,
            image: false !== console.acf.console_image ? console.acf.console_image : getImageBySlug(console.slug),
        }
    })
    
    return consoles;
}

const getImageBySlug = (slug: string) => {
    return process.env.PUBLIC_URL + '/' + slug + '.png'
}