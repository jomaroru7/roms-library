
export const getApiHost = () => {
    const regex = /(localhost|loc-www)/;
    return regex.test(window.location.host) ? 'localhost' : 'https://jomaroru.es';
}
