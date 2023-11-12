import logo from './logo.svg';
import './App.css';
import Footer from './common/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './common/Header/Header';
import Login from './components/Authentication/Login/Login';
import Home from './components/Home/Home';
import Product_create from './components/Crud/Product_create';
// import Display from './components/Crud/Display';
import Edit from './components/Crud/Edit';
import Registration from './components/Authentication/Registration/Registration';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { check_token } from './Redux/Authslice';
import { Vortex } from 'react-loader-spinner';
const Display = lazy(() =>  import('./components/Crud/Display'));
// const Display = lazy(() => delayForDemo( import('./components/Crud/Display')));
// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise);
// }

function App() {


  const  dispatch= useDispatch();
  function PrivateRoute({children}) {
    

    console.log(children, "childrenxxx");

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");



    return token !== null && token !== undefined ? (
      children
      
    ) : (
      <>
        <Navigate to="/" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }

  const publicRoute = [
    {
      path: "/Register",
      Component: <Registration/>
    },
    {
      path: "/Login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
  ]
  const privateRoute = [

    {
      path: "/CreateProduct",
      Component: <Product_create/>,
    },

    {
      path: "/Display",
      Component: <Display/>,
    },

    {
      path: "/Editproduct/:id",
      Component: <Edit/>,
    },
  ];
  useEffect(() => {
    dispatch(check_token())
   }, [])
  return (

    // <Suspense fallback={<Vortex
    //   visible={true}
    //   height="80"
    //   width="80"
    //   margin ="auto"
    //   ariaLabel="vortex-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="vortex-wrapper"
    //   colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    // />}>
    <Suspense fallback={"loading"}>

    <div >
      {/* <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Home/>} />
         
          <Route path='/Register' element={<Registration/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/CreateProduct' element={<Product_create/>} />
          <Route path='/Display' element={<Display/>} />
          <Route path='/Editproduct/:id' element={<Edit/>} />
        </Routes>
        < Footer/>
      </Router> */}

      <Router>
        <Header />
        <Routes>
          {publicRoute?.map((route, index) => {
            return (
              <Route
              path={route.path}
                element={route.Component}
              />
            );
          })}


          {privateRoute?.map((route, index) => {
            // console.log(route,"routecomponent");
            return (
              <Route
                path={route.path}
                // element={<PrivateRoute>{"akash"}</PrivateRoute>}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
                
              />
              
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </div> 
    </Suspense>
  );
}

export default App;
//route.compont are being accepted to children in privateroute() as props