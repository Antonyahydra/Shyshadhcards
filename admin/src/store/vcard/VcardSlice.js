import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Vcardservice from "./VcardService";


const initialState={
    Vcarddata:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
};
export const vcard=createAsyncThunk(
    "vcard/post",
    async(Vcarddata,thunkAPI)=>{
        try {
            return await Vcardservice.Vcard(Vcarddata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const vedit=createAsyncThunk(
    "vcard/put",
    async(Vcarddata,thunkAPI)=>{
        try {
            return await Vcardservice.Vedit(Vcarddata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const vcardslice=createSlice(
    {
        name:"Vcarddata",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(vcard.pending,(state)=>{
                state.isLoading=false;
                state.isSuccess = false;
                state.isError = true;
            })
            .addCase(vcard.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
              })
              .addCase(vcard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.userData = action.payload;
              })
            .addCase(vedit.pending,(state)=>{
                state.isLoading=false;
                state.isSuccess = false;
                state.isError = true;
            })
            .addCase(vedit.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
              })
              .addCase(vedit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.userData = action.payload;
              });
        }
    }
)
export default vcardslice.reducer