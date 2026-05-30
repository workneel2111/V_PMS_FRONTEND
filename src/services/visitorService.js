import API from "./api";

// Get all visitors
export const getVisitors = async () => {
    const response = await API.get("/visitors");

    return response.data;
};

// Create visitor
export const createVisitor = async (formData) => {
    const response = await API.post(
        "/visitors",
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }
    );

    return response.data;
};