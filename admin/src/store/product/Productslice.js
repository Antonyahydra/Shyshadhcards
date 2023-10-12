import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addproduct from "./Productservice";


const initialState = {
  productData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const product = createAsyncThunk(
    "addproduct/post",
    async (productdata,thunkAPI)  =>{
        try {
            return await addproduct.Addproduct(productdata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
            
        }
    }
    );
export const vproduct = createAsyncThunk(
    "viewproduct/get",
    async (productdata,thunkAPI)  =>{
        try {
            return await addproduct.Viewproduct(productdata);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
            
        }
    }
    );
export const productslice = createSlice({
    name:"productdata",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(product.pending,(state) =>{
            state.isLoading=true;
            state.isSuccess=false;
            state.isError=false;
        })
        .addCase(product.rejected,(state) =>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
        })
        .addCase(product.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.productData=action.payload;

        })
        .addCase(vproduct.pending,(state) =>{
            state.isLoading=true;
            state.isSuccess=false;
            state.isError=false;
        })
        .addCase(vproduct.rejected,(state) =>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
        })
        .addCase(vproduct.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.productData=action.payload;

        });
    },
});

export default productslice.reducer
