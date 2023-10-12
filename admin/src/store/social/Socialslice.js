import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import addsocial from "./Socialservice";


const initialState ={
    socialData : [],
    isLoading: false,
    isError:false,
    isSuccess:false,
};


export const social = createAsyncThunk(
    "addsocial/post",
    async (socialdata,thunkAPI)  =>{
        try {
            return await addsocial.Addsocial(socialdata)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    });

export const socialslice = createSlice({
    name:"socialedata",
    initialState,
    reducers:{},
    extraReducers: (builder)  => {
        builder
        .addCase(social.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(social.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          })
          .addCase(social.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.socialData = action.payload;
          });
        
    },
});

export default socialslice.reducer;