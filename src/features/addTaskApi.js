import { getAceAccessToken } from "../lib/secureLocalStorage";
import { apiSlice } from "./api/apiSlice";

export const addTaskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (body) => {
                const token = getAceAccessToken(); // Call the function to get token
                return {
                    url: "/tasks",
                    method: "POST",
                    body,
                    headers: {
                        Authorization: `Bearer ${token}`,  // Include the correct token
                        "Content-Type": "application/json", // Ensure content type is set
                    }
                };
            }
        })
    })
});

export const { useCreateTaskMutation } = addTaskApi;
