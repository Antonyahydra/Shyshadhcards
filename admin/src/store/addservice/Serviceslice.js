import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addservice from "./Addservice";

const initialState = {
  serviceData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const service = createAsyncThunk(
  "addservice/post",
  async (servicedata, thunkAPI) => {
  
    try {
     
      return await addservice.Addservice(servicedata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const vservice = createAsyncThunk(
  "viewservice/get",
  async (servicedata, thunkAPI) => {
    try {
      return await addservice.Viewservice(servicedata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const eservice = createAsyncThunk(
  "editservice/put",
  async (servicedata, thunkAPI) => {
    try {
      console.log(servicedata);
      return await addservice.Editservice(servicedata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const dservice = createAsyncThunk(
  "deleteservice/delete",
  async (servicedata, thunkAPI) => {
    try {
      return await addservice.Deleteservice(servicedata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const findoneser = createAsyncThunk(
  "getsingle/post",
  async (servicedata, thunkAPI) => {
    try {
      return await addservice.Findoneservice(servicedata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serviceslice = createSlice({
  name: "servicedata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(service.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(service.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(service.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serviceData = action.payload;
      })
      .addCase(vservice.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(vservice.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(vservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serviceData = action.payload;
      })
      .addCase(eservice.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(eservice.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(eservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serviceData = action.payload;
      })
      .addCase(dservice.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(dservice.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(dservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serviceData = action.payload;
      })
      .addCase(findoneser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(findoneser.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(findoneser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serviceData = action.payload;
      });
  },
});

export default serviceslice.reducer;
