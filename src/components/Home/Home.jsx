import React from 'react'
import "../Home/Home.css"
import carousle1 from "../img/continental.jpeg"
import carousle2 from "../img/hunter.jpeg"
import carousle3 from "../img/interceptor.jpeg"
import carousle4 from "../img/service.jpeg"
import g4 from "../img/gallary/g4.jpeg"
import team1 from "../img/team/team-1.jpg"
import team2 from "../img/team/team-2.jpg"
import team3 from "../img/team/team-3.jpg"
import team4 from "../img/team/team-4.jpg"
import g1 from "../img/gallary/g1.jpeg"
import g2 from "../img/gallary/g2.jpeg"
import g3 from "../img/gallary/g3.jpeg"
import g5 from "../img/gallary/g5.jpeg"
import g6 from "../img/gallary/g6.jpeg"
import t1 from "../img/testimonial/testimonials-1.jpg"
import t2 from "../img/testimonial/testimonials-2.jpg"
import t3 from "../img/testimonial/testimonials-3.jpg"
import t4 from "../img/testimonial/testimonials-4.jpg"
import t5 from "../img/testimonial/testimonials-5.jpg"
// import bg from "../img/testimonial/cta-bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoggedout } from '../../Redux/Authslice'

export default function Home() {
const dispatch= useDispatch();
const {isLogin}=useSelector((state)=>state.auth)
const navigate=useNavigate()
console.log(isLogin,"tokencheck");
  // const Logintoken= localStorage.getItem("token")
const logout=()=>{
  dispatch(handleLoggedout())
  navigate("/")
}
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousle1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousle2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousle3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousle4} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Creating websites that make you stop &amp; stare</h1>
              <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
              {/* <div><Link to="/Login" className="btn-get-started scrollto">Login</Link></div> */}
              {isLogin ? (
                    <>
                     <div class="text-center">
                      <Link to="/login" onClick={logout} class="btn-get-started">
                        Logout
                      </Link>
                    </div>
                    </>
                  ) : (
                    <div class="text-center">
                      <Link to="/Login" class="btn-get-started">
                        Login
                      </Link>
                    </div>
                  )}
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={g4} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>

      <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Team</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={team1} className="img-fluid" alt="" />

                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={team2} className="img-fluid" alt="" />

                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={team3} className="img-fluid" alt="" />

                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={team4} className="img-fluid" alt="" />

                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section id="gallery" className="gallery">
        <div className="container">

          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row gap-0 row-gap-3">

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g2} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g3} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g4} alt="" className="img-fluid" style={{ height: 306, width: 306 }} />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g5} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g6} alt="" className="img-fluid" style={{ height: 306, width: 306 }} />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={g1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
      <div id="carouselExampleCaptions" class="carousel slide xyz"  >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>


        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="container">
              <img src={t1} class="testimonial-img" alt="" />
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum accusamus distinctio
                dolorum facilis similique autem recusandae ducimus eum fugiat? Cumque eaque culpa quam! Quasi fugiat
                cum nulla! Suscipit, eos.</p>
              <h5>Name</h5>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <img src={t2} class="testimonial-img" alt="" />
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum
                accusamus distinctio dolorum facilis similique autem recusandae ducimus eum fugiat? Cumque eaque
                culpa quam! Quasi fugiat cum nulla! Suscipit, eos.</p>
              <h5>Name</h5>

            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <img src={t3} class="testimonial-img" alt="" />
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum accusamus distinctio
                dolorum facilis similique autem recusandae ducimus eum fugiat? Cumque eaque culpa quam! Quasi
                fugiat cum nulla! Suscipit, eos.</p>
              <h5>Name</h5>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <img src={t4} class="testimonial-img" alt="" />
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum accusamus distinctio
                dolorum facilis similique autem recusandae ducimus eum fugiat? Cumque eaque culpa quam! Quasi
                fugiat cum nulla! Suscipit, eos.</p>
              <h5>Name</h5>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <img src={t5} class="testimonial-img" alt="" />
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum accusamus distinctio
                dolorum facilis similique autem recusandae ducimus eum fugiat? Cumque eaque culpa quam! Quasi
                fugiat cum nulla! Suscipit, eos.</p>
              <h5>Name</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}
