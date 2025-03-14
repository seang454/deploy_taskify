import { getAceAccessToken } from "../lib/secureLocalStorage";
import { apiSlice } from "./api/apiSlice"

export const workspaceApi = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        //WORKSPACE
        createWorkspace: builder.mutation({
            query: (body) => ({
              url: "/workspaces",
              method: "POST",
              body,
            }),

          }),
          getWorkspaces: builder.query({
            query: (user_id) => ({
              url: `/workspaces?limit=20&offset=0&user_id=eq.${user_id}`, // Correct URL format
              method: "GET",
              headers: { Authorization: `Bearer ${getAceAccessToken()}`, 
              "Content-Type": "application/json",
          },
            }),
          }),
              
    }),

})



export const {useCreateWorkspaceMutation, useGetWorkspacesQuery} = workspaceApi;