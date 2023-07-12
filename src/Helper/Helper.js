import axios from "axios";

let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api/";
export const baseURL = adminUrl
let axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance
//whenever we are making a http request in backend ... so before making the request if we want to do any action we use interceptor

export const image = (media) => {
  return `https://wtsacademy.dedicateddevelopers.us` + `/uploads/product/${media}`;
}
export const profile_pic = (media) => {
  return `https://wtsacademy.dedicateddevelopers.us`+`/uploads/user/profile_pic/${media}`;
}
axiosInstance.interceptors.request.use((request) => {

  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token !== null || token !== undefined) {
    request.headers["x-access-token"] = token
  }
  return request;
});
  
// export const fetchBaseQueryInstance = () => {
//   return {
//     baseUrl: baseURL,
//     prepareHeaders: (headers) => {
//       headers.set(
//         "x-access-token",
//         localStorage.getItem("token") || sessionStorage.getItem("token")
//       );

//       return headers;
//     },
//   };
// };