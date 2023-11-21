
export const sanitizeString = (string: string) => {
    const regex = /(<([^>]+)>)/gi;
    let result = string.replace(regex, "");
    result = result.replace(/&#8211;/g, '-')
    return result;
}
