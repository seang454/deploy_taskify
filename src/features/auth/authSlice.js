
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //REGISTER
        register: builder.mutation({
            query: (body) => ({
                url: "/rpc/register",
                method: "POST",
                body
            })
        })
    })
})

export const { useRegisterMutation } = authApiSlice;
