import { Videoconsole, PostConsole } from "../types";
import { getApiHost } from "./";

export const getConsoles = async () => {
    // TODO - In the future could be more than 10 consoles. Control pagination.
    // const url = getApiHost() + '/wp-json/wp/v2/console/?acf_format=standard';
    const url = '/wp-json/wp/v2/console/?acf_format=standard';
    return fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json() as Promise<PostConsole[]>;
        }).then(data => {
            const consoles: Videoconsole[] = data.map((console: PostConsole) => {
                return {
                    id: console.id,
                    name: console.name,
                    description: console.description,
                    slug: console.slug,
                    image: false !== console.acf.console_image ? console.acf.console_image : getImageBySlug(console.slug),
                }
            })
            return consoles as Videoconsole[];
        })
}

const getImageBySlug = (slug: string) => {
    return '/' + slug + '.png'
    // return process.env.PUBLIC_URL + '/' + slug + '.png'
}