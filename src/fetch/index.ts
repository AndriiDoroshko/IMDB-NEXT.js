import * as url from "src/url.json";
import { API_KEY, QUEST_ID } from "src/api";
import axios from "axios";

export const getDataFromApi = async (urls, params = {}) => {
    return await axios
        .get(`${url.host}${urls}`, {
            params: {
                api_key: API_KEY,
                ...params,
            },
        })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};

export const postDataToApi = async (urls, params = {}) => {
    return await axios
        .post(
            `${url.host}${urls}`,
            { ...params },
            {
                params: {
                    api_key: API_KEY,
                    guest_session_id: QUEST_ID,
                },
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};

export const deleteDataToApi = async (urls, params = {}) => {
    return await axios
        .delete(`${url.host}${urls}`, {
            params: {
                api_key: API_KEY,
                guest_session_id: QUEST_ID,
            },
        })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
