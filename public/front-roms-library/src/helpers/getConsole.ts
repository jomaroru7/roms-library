export const getConsole = async (consoleId: number) => {
    const url = 'https://loc-www.jomaroru.es/wp-json/wp/v2/console/'+consoleId;
    const resp = await fetch(url);
    const console = await resp.json();
    return {
            id: console.id,
            name: console.name,
            description: console.description,
            slug: console.slug,
            image: false !== console.acf.console_image ? console.acf.console_image : getImageBySlug(console.slug),
    }
}

const getImageBySlug = (slug: string) => {
    return process.env.PUBLIC_URL + '/' + slug + '.png'
}