import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
import img1 from "../img/product_edit.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { productdetails, productdisplay, productupdate } from '../../Redux/Crudslice';
import { image } from '../../Helper/Helper';
export default function Edit() {
  const navigate = useNavigate()

  const productid = useParams()
  // console.log(productid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productdetails(productid));
  }, [productid]);
  const { details, redirectUpdate } = useSelector((state) => state.crud);
  // console.log(proddata.data.data._id);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [imageu, setImage] = useState();
  useEffect(() => {
    if (details != "") {
      setData({
        title: details.title,
        description: details.description,
      });
    }
  }, [details]);
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
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", imageu);
    formdata.append("id", details?._id);
    dispatch(productupdate(formdata));
    // RedirectUser()

  };

  const RedirectUser = () => {
    let title = localStorage.getItem("title");
    // let isInLoginPage = window.location.pathname.toLowerCase() === `editproduct/${productid}`;
    if (title !== null && title !== undefined && title !== "") {
      // window.location.pathname = getPathname;
      // isInLoginPage && 
      navigate("/Display");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectUpdate])

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

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Update the product</h5>

                <MDBInput wrapperClass='mb-4' label='Title' id='formControlLg' type='text' size="lg" name='title' onChange={handelChange} value={data.title} />
                <MDBInput wrapperClass='mb-4' label='Description' id='formControlLg' type='text' size="lg" name='description' onChange={handelChange} value={data.description} />
                <MDBFile label='Default file input example' id='customFile' onChange={(e) => setImage(e.target.files[0])} name="img" />
                {imageu == null ? (<img src={image(details?.image)} alt="" />) : (<img src={URL.createObjectURL(imageu)} />)}
                {/* URL.createObjectURL(imageu) this is used to convert the imgae into a link and then then link is read by src  */}

                <MDBBtn className="mb-4 px-5 mt-5" color='dark' size='lg' onClick={sendData}>Update</MDBBtn>


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
