
export const getApiHost = () => {
    const regex = /(localhost|loc-www)/;
    return regex.test(window.location.host) ? 'https://loc-www.jomaroru.es' : 'https://jomaroru.es';
}
