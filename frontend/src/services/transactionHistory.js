import { get } from "../utils/request";

export const getTransactionHistory= async (stationCode) => {
    const result = await get(`transactionHistory?CCCD=${stationCode}`);
    return result;
}