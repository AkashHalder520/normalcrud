import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBFile
}
    from 'mdb-react-ui-kit';
import img1 from './lino-lgYWrWl_7Fs-unsplash.jpg'
import { productcreate } from '../../Redux/Crudslice';
import { redirect, useNavigate } from 'react-router-dom';
export default function Product_create() {
    const navigate = useNavigate();
    const redirect=useSelector((s)=>s.crud)
    console.warn(redirect,"crud");
    const [data, setData] = useState({
        title: "",
        description: "",
    });

    const [img, setImage] = useState();
    const dispatch = useDispatch();
    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "title") {
            if (value.length == 0) {
                setData({ ...data, title: "" });
            } else {
                setData({ ...data, title: value });
            }
        }

        if (name === "description") {
            if (value.length == 0) {
                setData({ ...data, description: "" });
            } else {
                setData({ ...data, description: value });
            }
        }
    };
    const sendData = (event) => {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append("title", data.title)
        formdata.append("description", data.description)
        formdata.append("image", img)
        dispatch(productcreate(formdata))
    
    }
    const RedirectUser = () => {
        //    console.log("redirect function",isLogin);
        //     // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
        // //    console.log(isInLoginPage);
        let title = localStorage.getItem("title")
        console.log(title);
        if (title !== null && title !== undefined && title !== "") {
            navigate("/Display");
        }

    };
    useEffect(() => {
        RedirectUser();
      },[redirect])

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

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create a product</h5>

                                <MDBInput wrapperClass='mb-4' label='Title' id='formControlLg' type='text' size="lg" name='title' onChange={handelChange} />
                                <MDBInput wrapperClass='mb-4' label='Description' id='formControlLg' type='text' size="lg" name='description' onChange={handelChange} />
                                <MDBFile label='Default file input example' id='customFile' onChange={(e) => setImage(e.target.files[0])} name="img" />
                                {img !== "" && img !== undefined && img !== null ? (<img src={URL.createObjectURL(img)} alt="" className="upload-img" />) : ("no image")}
                                <MDBBtn className="mb-4 px-5 mt-5" color='dark' size='lg' onClick={sendData}>Submit</MDBBtn>


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
