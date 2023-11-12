import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productdelete, productdisplay, remove_title, removetitleupdate } from '../../Redux/Crudslice';
import { image } from '../../Helper/Helper';
import SweetAlertComponent from '../SweetAlert/Sweetalert';
// import img1 from './lino-lgYWrWl_7Fs-unsplash.jpg'
import './Disply.css'
export default function Display() {
  // const {isLogin}=useSelector((state)=>state.crud)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const [totalRecords, setPage] = useState()
  // console.log(totalRecords,'totalRecords')
  const [delete_id, setDelete_id] = useState();
  const [isDelete, setIsDelete] = useState(false); //for sweetalert
  // const { redirectTo } = useSelector((s) => s.auth);
  // const { oo,redirectTood,totalpage} = useSelector((s) => s.crud);
  const { oo } = useSelector((s) => s.crud)
  // console.log(oo, "kkkkkk")

  useEffect(() => {
    dispatch(productdisplay());
  },[]);
  // console.log(data);
  // console.log(totalpage,"totalpage")

 

  const delete_func = () => {
    if (delete_id !== "") {
      setIsDelete(true);
      dispatch(productdelete({ id: delete_id }))
        .then(() => dispatch(productdisplay()))
        .catch((error) => {
          // Handle any error that occurs during the dispatch
          console.error("Error deleting product:", error);
        });
    }
  
    setDelete_id("");
    console.log("before");
    // if(isDelete==true){
    //   dispatch(productdisplay());
    //   console.log("after dispatch");
    // }
    setIsDelete(false);
  };


  // const handleChange = (e, pageno) => {
  //   setPage(pageno);
  //   dispatch(productdisplay(
  //     {
  //       page: pageno,
  //       perpage: 10

  //     }));

  // };



  useEffect(() => {
    dispatch(remove_title())
  }, [])
  useEffect(() => {
    dispatch(removetitleupdate())
  })
  return (
    <>


      <div className="container mt-5">
        <h4>
          Product list
          <Link to="/CreateProduct" class="btn btn-primary float-end">
            Add Product
          </Link>
        </h4>
        <div className='container row row-cols-3  '>
        {oo.length !== 0 ? (
          oo?.map((item) => {
            return (
              <>
                {/* <MDBRow className="justify-content-center mb-0">
                <MDBCol md="12" xl="10">
                  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <MDBCardImage
                              src={item?.image ? image(item?.image) : "error"}// this part problem 
                              fluid
                              className="w-100"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md="6">
                          <h5>{item.title}</h5>

                          <p className=" mb-4 mb-md-0">
                            {item.description}
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >

                          <div className="d-flex flex-column mt-4">
                            <Link to={`/Editproduct/${item._id}`} style={{all:'inherit'}} >
                            <MDBBtn outline color="primary" size="sm" >
                              Edit
                            </MDBBtn>
                            </Link>
                            <MDBBtn outline color="danger" size="sm" className="mt-2" onClick={() => {
                              setDelete_id(item?._id);
                              setIsDelete(true);
                            }}>
                              Delete
                            </MDBBtn>
                          </div>
                          {isDelete && (
                            <SweetAlertComponent
                              confirm={delete_func}
                              cancle={() => setIsDelete(false)}
                              title={"Are you sure?"}
                              subtitle={"You will not be able to recover!"}
                            />
                          )}
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow> */}





                <div className="col box">
                  <img src={item?.image ? image(item?.image) : "error"} className="img-fluid" alt="" />

                  <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <Link to={`/Editproduct/${item._id}`}>
                    <button type="button" class="btn btn-outline-success">Edit</button>
                    </Link>
                    
                    <button type="button" class="btn btn-outline-danger" onClick={()=>{setDelete_id(item?._id);
                              setIsDelete(true);}}>Delete</button>
                             
                  </div>
                </div>
                


              </>

            )
          })
        ) : (
          <p>no Data found</p>
        )
        }
</div>
      </div>
      {isDelete && (
                            <SweetAlertComponent
                              confirm={delete_func}
                              cancle={() => setIsDelete(false)}
                              title={"Are you sure?"}
                              subtitle={"You will not be able to recover!"}
                            />
                          )}
    </>
  )
}
