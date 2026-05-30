import API from "./api";

// Get passes
export const getPasses = async () => {
    const response = await API.get("/passes");

    return response.data;
};

// Generate pass
export const generatePass = async (
    appointmentId
) => {

    const response = await API.post(
        `/passes/generate/${appointmentId}`
    );

    return response.data;
};