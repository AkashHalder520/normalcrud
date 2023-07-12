import React, { useEffect, useState } from 'react'
import img1 from './lino-lgYWrWl_7Fs-unsplash.jpg'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { handleRegister, login } from '../../../Redux/Authslice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,  } from 'react-router-dom';

export default function Login() {
    const {isLogin}=useSelector((state)=>state.auth)
    console.log(isLogin);
    const [user, setUser] = useState({

        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate =useNavigate()

    const validation = () => {
        const regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const error = {};
        if (!user.email) {

            error.email = ("Please enter the password")
        }
        else if (!regx.test(user.email)) {
            error.email = ("enter a valid email")
        }
        if (!user.password) {


            error.password = ("please enter the password")
        }

        return error
    }
    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "email") {
            if (value.length == 0) {
                setError({ ...error, email: "@Email is Required" });
                setUser({ ...user, email: "" });
            } else {
                setError({ ...error, email: "" });
                setUser({ ...user, email: value });
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" });
                setUser({ ...user, password: "" });
            } else {
                setError({ ...error, password: "" });
                setUser({ ...user, password: value });
            }
        }

    };
    
    const RedirectUser=()=>{
       console.log("redirect function",isLogin);
        // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    //    console.log(isInLoginPage);

        if (isLogin) {
             navigate("/Display");
        }
        
    };

    useEffect(()=>{
        RedirectUser();
    })

  
    const sendData =(event) => {
        event.preventDefault()//prevents reload
        setError(validation())

        // let formData= new FormData();
        // formData.append("email",user.email);
        // formData.append("password",user.password);
        const formData = {
            email: user.email,
            password: user.password
        }
        console.log(formData);
        dispatch(login(formData))
        // RedirectUser()
    }
    
  const tockenNameRemove=()=>{
    dispatch(handleRegister())
  }

 

    return (
        <>
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src={img1} alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <span className="h1 fw-bold mb-0">Logo</span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={handelChange} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name='password' onChange={handelChange} />

                                <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={sendData}>Login</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/Register" onClick={tockenNameRemove} style={{ color: '#393f81' }}>Register here</Link></p>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>
        </>
    )
}
