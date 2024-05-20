import { get, post } from "../utils/request";

export const login = async (CCCD, password) => {
    const result = await get(`users?CCCD=${CCCD}&password=${password}`);
    return result;
};

export const register = async (options) => {
    const result = await post(`users`,options);
    return result;
};
export const checkExits = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
};
export const getInfoUser = async (CCCD) => {
    const result = await get(`users?CCCD=${CCCD}`);
    return result;
};