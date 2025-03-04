//........................RTK............................................................................
// import {createAsyncThunk } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
// export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async()=>{
//     const product = await fetch('https://dummyjson.com/products').then((response)=>response.json());
//     // console.log(product.products)
//     return product;
// });
// export const productSlice = createSlice({
//     name:" products",
//     initialState: {
//         products:[],
//         status:"idle" //laoding,fulfill,rejected
//     },
//     reducers: {},
//     extraReducers: (builder)=> {
//         builder
//        .addCase(fetchAllProducts.pending, (state, action) => {
//         state.status = "loading";

//        })
//        .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         console.log("ActionAllFromProducts",action)
//         state.status = "success";
//         // state.products = action.products;  // set to initialproduct
//         state.products = action.payload;
//        })
//        .addCase(fetchAllProducts.rejected, (state, action) => {
//         state.status = "failed";
//         console.log("Action",action)
//        })

//     }
// });
// export default  productSlice.reducer;
//.......................................RTK................................................................

import { apiSlice, urlSlice } from "../api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    })
    
  }),
});

export const signup = urlSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `https://ishop-api.istad.co/api/v1/users/user-signup`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const upLoadFile =  urlSlice.injectEndpoints()

export const {useSignUpMutation} = signup;

export const { useGetAllProductsQuery,useGetSingleProductsQuery } = productApiSlice;
