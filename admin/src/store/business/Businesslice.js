import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import busineservice from "./Businesservice";




const initialState = {
    businessdata : [],
    isLoading: false,
    isError:false,
    isSuccess:false,
};
export const business = createAsyncThunk(
    "addbusiness/post",
    async (businessdata,thunkAPI)  =>{
        try {
            return await busineservice.AddBusiness(businessdata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    });

export const businesslice = createSlice({
    name:"businessdata",
    initialState,
    reducers:{},
    extraReducers: (builder)  => {
        builder
        .addCase(business.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(business.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          })
          .addCase(business.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.businessdata = action.payload;
          });
        
    },
});

export default businesslice.reducer;