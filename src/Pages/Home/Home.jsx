
import "./Home.css";
import CarouselImg1 from "../Home/Assets/img/engineering-staffing-bg.jpg";
import CarouselImg2 from "../Home/Assets/img/banner-1-home.jpg";
import { ReactTyped } from "react-typed";


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <div className="container-fluid">
     <div id="carouselExampleInterval" class="carousel slide zindex" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>

    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000"> 
            <div class="image-wrapper d-flex justify-content-start align-items-center position-relative">
                <img src={CarouselImg1} className="d-block w-100 transparent-img" alt="..." />
            </div>
            <div class="carousel-caption start-0 mx-5 px-4 top-50 translate-middle-y d-none d-md-block">
                <div class="d-flex justify-content-start">
                    <h1 class="fw-bold text-black">TRANSFORMING
YOUR  </h1>
                </div>
                <h1 class="fw-bold text-black d-flex justify-content-start ">TEAM TO AN</h1>
                <ReactTyped strings={["A-TEAM"]} typeSpeed={100} loop className="a-team_color d-flex justify-content-start" />
                <div class="button_color my-3 ">
                    <button class="btn d-flex justify-content-start px-5 mx-2 my-2 text-white fw-bold fs-5" type="submit">Know More</button>
                </div>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="2500">
            <div class="image-wrapper d-flex justify-content-start align-items-center position-relative">
                <img src={CarouselImg2} className="d-block w-100 transparent-img" alt="..." />
                <div class="carousel-caption start-0 mx-5 px-4 top-50 translate-middle-y d-none d-md-block">
                    <div class="d-flex justify-content-start">
                        <h1 class="fw-bold text-black ">FIND YOUR FIT </h1>
                    </div>
                    <h1 class="fw-bold text-black d-flex justify-content-start ">IN AN</h1>
                    <ReactTyped strings={["A-TEAM"]} typeSpeed={100} loop className="a-team_color d-flex justify-content-start" />
                    <div class="button_color my-3 ">
                        <button class="btn d-flex justify-content-start px-5 mx-2 my-2 text-white fw-bold fs-5" type="submit">Explore Careers</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

</div>


      <div className="container-fluid backgroun_color">
        <div className="container px-5 mt-2 mb-3 py-2">
          <div className="row py-1">
            <div className="col-lg-3 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/Service-icon-01.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                IT <br />
                STAFFING
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/Service-icon-02.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-right"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                ENGINEERING
                <br />
                STAFFING
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/Service-icon-03.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                SALES
                <br />
                STAFFING
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/Service-icon-04.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-right"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                DIRECT
                <br />
                HIRING - IT
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-center my-5 py-2">
            <div className="col-lg-4 col-md-6 col-12 text-center ">
              <img
                src="https://www.xpheno.com/resources/images/Service-icon-05.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                DIRECT HIRING -
                <br />
                FUNCTIONS
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/tech-staff-aug.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                TECH STAFF
                <br />
                AUGMENTATION
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-center">
              <img
                src="https://www.xpheno.com/resources/images/Executive%20search.png"
                alt
                className="img-fluid"
                style={{ maxWidth: 80, height: "auto" }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
              <h4 className="text-white fw-bold py-3">
                EXECUTIVE
                <br />
                SEARCH
              </h4>
              <button type="button" class="px-4 py-2 btn_hover_color fw-bold">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
