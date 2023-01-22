import axios from "axios";

export const api = axios.create({
    headers: { "Content-Type": "application/json" },
    baseURL: process.env.REACT_APP_BASE_URL,
    // Accept: "application/json",
    // withCredentials: true,
    // delayed: true
});
api.interceptors.request.use((config) => {
    if (config.delayed) {
        return new Promise((resolve) =>
            setTimeout(() => resolve(config), 1000)
        );
    }
    return config;
});
