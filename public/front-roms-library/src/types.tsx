export type OnNewRom = (newRom: Rom) => void;

export interface getRomsArgs {
    search?: string,
    page?: number, 
    videoconsole?: string
}
export interface PostRom {
    acf: {
        rom_download_link : string,
        rom_drive_id: string,
        rom_image?: string | false,
    },
    console: number[],
    content:{
        rendered: string
    },
    guid: {
        rendered: string
    },
    id: number,
    slug: string,
    title: {
        rendered: string
    }
}

export interface PostConsole {
    acf: {
        console_drive_id: string,
        console_image?: string | false,
    },
    description: string,
    id: number,
    slug: string,
    name: string
}

export interface Rom {
    id: number,
    title: string, 
    description: string, 
    console: string,
    image: string,
}

export interface Console {
    image?: string | false,
    description: string,
    id: number,
    slug: string,
    name: string
}