import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addapoinment from "./Apoinmentservice";

const initialState = {
  apoinmentData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const apoinment = createAsyncThunk(
  "addapoinment/post",
  async (apoimentdata, thunkAPI) => {
    try {
      return await addapoinment.Addapoinment(apoimentdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const apoinmentslice = createSlice({
  name: "apoinmentdata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apoinment.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(apoinment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(apoinment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.apoinmentData = action.payload;
      });
  },
});

export default apoinmentslice.reducer;
