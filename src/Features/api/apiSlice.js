import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (build) => ({}),
});

export const urlSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `` }),
  endpoints: (build) => ({}),
});
