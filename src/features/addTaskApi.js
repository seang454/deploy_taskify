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
                        Authorization: `Bearer ${token}`,  
                        "Content-Type": "application/json", 
                    }
                };
            }
        }),
        getTasks: builder.query({
            query:()=>({
                    url: `/tasks?limit=20&offset=0`,
                    method: "GET",
                    body,
                    headers: {
                        Authorization: `Bearer ${getAceAccessToken()}`,
                        "Content-Type": "application/json"
                    }
            })
        })
    })
});

export const { useCreateTaskMutation ,useGetTasksQuery } = addTaskApi;
