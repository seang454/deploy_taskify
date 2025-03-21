import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState:{
    count: 0,
  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      if(state.count<=0){
         state.count = 0;
      }
      else{
        state.count -= 1;
      }
     
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
