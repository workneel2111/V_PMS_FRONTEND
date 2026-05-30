import API from "./api";

// Get logs
export const getLogs = async () => {

    const response =
        await API.get("/logs");

    return response.data;
};