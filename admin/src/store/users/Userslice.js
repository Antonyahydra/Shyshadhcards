import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userservice from "./Userservice";

const initialState = {
  userData: [],
  isLoading: false,
  isError: false,
  isSuccess: false, // Corrected property name
};

export const signup = createAsyncThunk(
  "signup/post",
  async (signupdata, thunkAPI) => {
    try {
      return await userservice.Signup(signupdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const login = createAsyncThunk(
  "login/post",
  async(logindata,thunkAPI) =>{
    try {
      return await userservice.Login(logindata)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
      
    }
  }
)

export const userslice = createSlice({
  name: "userdata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userData = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userData = action.payload;
      });
  },
});

export default userslice.reducer;
