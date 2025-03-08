import { apiSlice } from "../api/apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //REGISTER
        register: builder.mutation({
            query: (body) => ({
                url: "/rpc/register",
                method: "POST",
                body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/rpc/login",
                method: "POST",
                body
            })
        }),
    })
})

export const { useRegisterMutation,useLoginMutation } = authApiSlice;
