import { apiSlice } from "./api/apiSlice";

export const checklistItemApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createChecklistItem: builder.mutation({
            query: (body) => ({
              url: "/checklist_items",
              method: "POST",
              body,
            }),

          }),
    })
})

export const {useChecklistItemMutation} = checklistItemApi;