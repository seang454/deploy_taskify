import { getAceAccessToken } from "../lib/secureLocalStorage";
import { apiSlice } from "./api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCategories: builder.mutation({
            query:(body) => {
                const token = getAceAccessToken();
                return{
                    url:"/categories",
                    method: "POST",
                    body,
                    headers:{
                        Authorization: `Bearer ${token}`,  
                        "Content-Type": "application/json",   
                    }
                }
            }
        }),
        getCategories: builder.query({
            query: ({limit, offset})=>{
                const token = getAceAccessToken();
                return{
                    url: `/categories?limit=${limit}&offset=${offset}`,
                    method : "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            }
        })
    })
})

export const { useCreatCategoriesMutation, useGetCategoriesQuery} = categoriesApi;