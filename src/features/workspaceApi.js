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
          
    }),

})



export const {useCreateWorkspaceMutation, useGetWorkspacesQuery} = workspaceApi;