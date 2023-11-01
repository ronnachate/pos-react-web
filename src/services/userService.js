import httpClient, { api_path } from './httpClient'
const _serverUrl = api_path;

const baseUrl = `${_serverUrl}/user`;
export const getUsers = async (page = 1, limit = 10, q) => {
    let url = `${baseUrl}?page=${page}&rows=${limit}`;
    if (q) {
        url += `&q=${q}`;
    }
    try {
        const res = await httpClient.get(url)
        return res.data;
    } catch (error) {
        return { error: true, ...error };
    }
}
export const getUser = async (userId) => {
    let url = `${baseUrl}/${userId}`;
    try {
        const res = await httpClient.get(url)
        return res.data;
    } catch (error) {
        return { error: true, ...error };
    }
}