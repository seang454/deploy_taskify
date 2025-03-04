// import { configureStore } from "@reduxjs/toolkit";
// import  productSlice  from "../featurs/product/productSlice";

// export default configureStore({
//   reducer: {
//     productR: productSlice,
//   },
// });

//.............................RTK...................................

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, urlSlice } from "../featurs/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    [signUp.reducerPath]:urlSlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(signUp.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch)
