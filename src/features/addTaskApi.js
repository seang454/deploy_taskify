import { getAceAccessToken } from "../lib/secureLocalStorage";
import { apiSlice } from "./api/apiSlice";

export const addTaskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (body) => {
                const token = getAceAccessToken(); 
                return {
                    url: "/tasks",
                    method: "POST",
                    body,
                    headers: {
                        Authorization: `Bearer ${token}`,  
                        "Content-Type": "application/json", 
                    }
                };
            }
        }),
        getTasks: builder.query({
            query: ({ limit, offset }) => {
                const token = getAceAccessToken();
                return {
                    url: `/tasks?limit=${limit}&offset=${offset}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                };
            }
        })
    })
});

export const { useCreateTaskMutation ,useGetTasksQuery } = addTaskApi;
