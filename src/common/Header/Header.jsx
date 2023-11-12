import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { handleLoggedout } from '../../Redux/Authslice'
import { profiledetails } from '../../Redux/Crudslice'
import { profile_pic } from '../../Helper/Helper'

export default function Header() {
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin, } = useSelector((state) => state.auth)
  const {profile_details}=useSelector((state)=>state.crud)
  // console.log(profile_details);
  let name=profile_details?.first_name+" "+profile_details?.last_name
  // console.log(name);
  // console.log(isLogin);
  const logout = () => {
    dispatch(handleLoggedout())
   navigate("/")
    }
    useEffect(()=>{
      dispatch(profiledetails())
    },[isLogin])
    
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Logo</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Display">Display </Link>
              </li>
            
                        
            </ul>
            
            {isLogin ? (
              <>
              <img height="40px" className='mx-5' src={ profile_pic(profile_details?.profile_pic)}  alt="..."/>       
            <span className="me-5 fw-bolder">{name}</span>
                <div class="text-center">
                  <button onClick={logout} class="btn btn-outline-danger">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div class="text-center">
                <Link to="/Login" class="btn btn-outline-success">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
