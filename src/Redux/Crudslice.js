import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  status: "idle",
  details: [{}],
  oo: [{}],
  redirect: null,
  redirectUpdate:null,
  totalpage: "",
  profile_details:""
};

export const productcreate = createAsyncThunk(
  "product-create",

  async (formData) => {
    let res = await axiosInstance.post(`product/create`, formData);

    let resData = res?.data;

    return resData;
  }
);
export const productdisplay = createAsyncThunk(
  "displayproduct",

  async (formdata) => {
    let res = await axiosInstance.post(`product/list`, formdata);

    let resData = res?.data;

    return resData;
  }
);
export const productdelete = createAsyncThunk(
  "delete_product",

  async (id) => {
    console.log("productid=", id);
    let res = await axiosInstance.post(`product/remove/`, id);
    let resData = res?.data
    return resData
  }
)

export const productdetails = createAsyncThunk(
  "product_details",

  async ({ id }) => {
    console.log("productid", id);
    let res = await axiosInstance.get(`product/detail/${id}`);
    let resData = res?.data
    return resData
  }
)
export const productupdate = createAsyncThunk(
  "product/update",
  async (formData) => {
    let res = await axiosInstance.post(`product/update`, formData);
    let resData = res?.data;
    return resData;
  }
);
export const profiledetails = createAsyncThunk(
  "/user/profile-details",

  async () => {
    let res = await axiosInstance.get(`/user/profile-details`,);

    let resData = res?.data;

    return resData;
  }
);


export const Crudslice = createSlice({
  name: "crud_operations",
  initialState,
  reducers: {

    remove_title: (state, action) => {
      localStorage.removeItem('title')

    },
    removetitleupdate: (state, action) => {

      localStorage.removeItem('titleupdate')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(productcreate.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(productcreate.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        localStorage.setItem("title", payload?.data.title);
        // state.oo = payload.data
        state.redirect = "/Display"
        toast("product created successfully")

      })
      .addCase(productcreate.rejected, (state, action) => {
        state.status = "rejected";
      })

      .addCase(profiledetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(profiledetails.fulfilled, (state, { payload }) => {
        state.status = "idle";
        // console.log(payload);
        state.profile_details = payload?.data


      })
      .addCase(profiledetails.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(productdisplay.pending, (state, action) => {
        state.status = "loading";
        console.log('pending');
      })
      .addCase(productdisplay.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        console.log(payload);
        state.oo = payload.data
        state.totalpage = payload.totalPages
        state.redirectUpdate=null
      })
      .addCase(productdisplay.rejected, (state, action) => {
        state.status = "rejected";
        console.log('rjected');
      })

      .addCase(productdelete.pending, (state, action) => {
        state.status = "loading";
        console.log('pending');
      })
      .addCase(productdelete.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        // state.oo = payload.data //payload data is empty so state => empty
        // console.log(action.payload);
        // state.data = action.payload
        toast(payload.message)
      })
      .addCase(productdelete.rejected, (state, action) => {
        state.status = "rejected";
        console.log('rjected');
      })

      .addCase(productdetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(productdetails.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        // console.log(action.payload);
        state.details = payload.data

        // localStorage.setItem("title", payload?.data.title);
      })
      .addCase(productdetails.rejected, (state, action) => {
        state.status = "rejected";
      })

      .addCase(productupdate.pending, (state, action) => {
        state.status = "loading";
      })
     
      .addCase(productupdate.fulfilled, (state,{payload}) => {
          state.status = "idle";
          localStorage.setItem("title",payload?.data.title)
          console.log(payload?.data.title,"nnnnnn")
          toast(payload?.message)
          state.redirectUpdate = "/Display"
          
        })      
      .addCase(productupdate.rejected, (state, action) => {
        state.status = "rejected";
      })
  }
})
export const { remove_title, removetitleupdate } = Crudslice.actions;