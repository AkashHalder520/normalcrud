import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Helper/Helper"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState={
    status :"idle",
    isLogin: false,
    redirectTo: null,

}
export const register =createAsyncThunk(
    "register",
    async(fromData)=>{
        let res=await axiosInstance.post(`user/signup`, fromData);
        let resData = res?.data;

    return resData;
  }
);

export const login = createAsyncThunk(
  "login",

  async (fromData) => {
    console.log(fromData);
    let res = await axiosInstance.post(`user/signin`, fromData);

    let resData = res?.data;

    return resData;
    }
)

export const Authslice= createSlice({
    name: "authentication",
    initialState,
    reducers:{

      // reset_redirectTo: (state, { payload }) => {
      //   state.redirectTo = payload;
      // },
      check_token: (state, { payload }) => {
        let token = localStorage.getItem("token");
        if (token !== null && token !== undefined) {
          state.isLogin = true;
        }
      },
      handleLoggedout: (state, { payload }) => {
        toast("logout successfully")
        localStorage.removeItem("token");
        localStorage.removeItem("Name");
        state.isLogin = false;
      },
      handleRegister: (state, { payload }) => {
       
        localStorage.removeItem("name");
        
      },
    },
    extraReducers:(builder)=>{
        builder 
        .addCase(register.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(register.fulfilled, (state, { payload }) => {
            state.status = "idle";
            if (payload?.status === 200) {
              toast(payload?.message)
            state.redirectTo = "/Login";
            localStorage.setItem("name", payload?.data?.first_name);// this is used check the condition to redirect to another page
            }else{
              if(payload?.status==201){
                  toast(payload?.message)
                 }
             }
          })
          .addCase(register.rejected, (state, action) => {
            state.status = "rejected";
          })


          .addCase(login.pending, (state, action) => {
            state.login_status = "loading";
          })
          .addCase(login.fulfilled, (state, { payload }) => {
            if (payload?.status === 200) {
              toast(payload?.message)
              localStorage.setItem("token", payload?.token);
              state.isLogin = true;
              
            }else{
              if(payload?.status==201){
                toast(payload?.message)
               }
            }
          })
          .addCase(login.rejected, (state, action) => {});
    }
})
export const{handleLoggedout,handleRegister,check_token}=Authslice.actions