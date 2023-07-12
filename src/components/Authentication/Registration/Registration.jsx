import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBFile
}
    from 'mdb-react-ui-kit';
import img1 from './lino-lgYWrWl_7Fs-unsplash.jpg'
import { register } from '../../../Redux/Authslice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const [profile_pic, setProfile_pic] = useState()
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const redirectTo=useSelector((s)=>s.auth)
    const handelchange = (event) => {
        let name = event.target.name;
        let value = event.target.value

        if (name === "email") {
            if (value.length == 0) {
                setError({ ...error, email: "enter the valid email" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" });
                setUser({ ...user, email: value });
            }
        }
        if (name === "first_name") {
            if (value.length === 0) {
                setError({ ...error, first_name: "@first name required" });
                setUser({ ...user, first_name: "" });
            } else {
                setError({ ...error, first_name: "" });
                setUser({ ...user, first_name: value });
            }
        }
        if (name === "last_name") {
            if (value.length === 0) {
                setError({ ...error, last_name: "@first name required" });
                setUser({ ...user, last_name: "" });
            } else {
                setError({ ...error, last_name: "" });
                setUser({ ...user, last_name: value });
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "passwordrequired" });
                setUser({ ...user, password: "" });
            } else {
                setError({ ...error, password: "" });
                setUser({ ...user, password: value });
            }
        }
    }
    const sendData = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("first_name", user.first_name);
        formData.append("last_name", user.last_name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("profile_pic", profile_pic);
        dispatch(register(formData));

    };

    const RedirectUser = () => {
            let name = localStorage.getItem("name");
            let isInRegistrationPage = window.location.pathname.toLowerCase() === "/register";
        
            if (name !== null && name !== undefined && name !== "") {// conditon to redirect to login
              // window.location.pathname = getPathname;
              isInRegistrationPage && navigate("/login");
            }
          };
        
        
          useEffect(() => {
            RedirectUser();
          }, [redirectTo])
        

    return (
        <>
      
            <MDBContainer>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <div className='d-flex flex-row mt-2'>
                            <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center' >

                                <span className="h3 fw-bold mb-5">Sign-up</span>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='First Name' id='form1' type='text' className='w-100' name='first_name' onChange={handelchange} />
                                    <span style={{ color: "red" }}>{error.first_name}</span>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Last Name' id='form1' type='text' className='w-100' name='last_name' onChange={handelchange} />
                                    <span style={{ color: "red" }}>{error.last_name}</span>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' name='email' onChange={handelchange} />
                                    <span style={{ color: "red" }}>{error.email}</span>
                                </div>


                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' name='password' onChange={handelchange} />
                                    <span style={{ color: "red" }}>{error.password}</span>
                                </div>


                                

                                <div className='mb-4'>
                                <MDBFile label='Default file input example' id='customFile' onChange={(e) => setProfile_pic(e.target.files[0])} name="img" />
                                </div>

                                <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={sendData}>Register</MDBBtn>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src={img1} fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>

        </>
    )
}

