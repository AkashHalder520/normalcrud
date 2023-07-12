import { configureStore } from "@reduxjs/toolkit";
import { Authslice } from "./Authslice";
import { Crudslice } from "./Crudslice";



// import {authslice} from "./authslice"

export const store = configureStore({
  reducer: {
    auth:Authslice.reducer,
    crud:Crudslice.reducer
  },

});