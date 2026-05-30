import API from "./api";

// Get appointments
export const getAppointments = async () => {
    const response = await API.get("/appointments");

    return response.data;
};

// Create appointment
export const createAppointment = async (data) => {
    const response = await API.post(
        "/appointments",
        data
    );

    return response.data;
};

// Update appointment status
export const updateAppointmentStatus = async (
    id,
    status
) => {
    const response = await API.put(
        `/appointments/${id}`,
        { status }
    );

    return response.data;
};