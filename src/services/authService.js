import API from "./api";

// LOGIN
export const loginUser = async (data) => {

    const response = await API.post(
        "/auth/login",
        data
    );

    return response.data;
};