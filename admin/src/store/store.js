import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/Userslice";
import vcardReducer from "./vcard/VcardSlice"
import serviceReducer from "./addservice/Serviceslice"
import productReducer from "./product/Productslice"
import businessReducer from "./business/Businesslice"
import apoinmentReducer from "./apoinment/Apoinmentslice"
import socialReducer from "./social/Socialslice"
export const store = configureStore({
  reducer: {
    userDatax: userReducer,
    vcardDatax: vcardReducer,
    servicedatax:serviceReducer,
    productdatax:productReducer,
    businessdatax:businessReducer,
    apoinmentdatax:apoinmentReducer,
    socialdatax:socialReducer,
    

    
  },
});
