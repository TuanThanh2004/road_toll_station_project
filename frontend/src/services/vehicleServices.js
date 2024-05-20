import { del, get, patch, post } from "../utils/request"

export const getListVehicle = async (CCCD) => {
    const result = await get(`vehicle?CCCD=${CCCD}`);
    return result;
}
export const addVehicle = async (options) => {
    const result = await post(`vehicle`, options);
    return result;
}
export const editVehicle = async (id, options) => {
    const result = await patch(`vehicle/${id}`, options);
    return result;
}
export const deleteVehicle = async (id) => {
    const result = await del(`vehicle/${id}`);
    return result;
}