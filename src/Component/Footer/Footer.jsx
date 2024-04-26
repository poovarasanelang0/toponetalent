import React ,{ useRef } from 'react'
import emailjs from '@emailjs/browser';



import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const form = useRef();
  // 
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gcxqcub', 'template_gaczc7r', form.current, 'BrVJuhmqBMVrTO8W2')
        .then((result) => {
            console.log(result.text);

            e.target.reset();

            alert('Email Send...')
           }, (error) => {
              console.log(error.text);
              alert("can't send...")
           });
    };


  return (
    <>
      <footer className="pt-2 py-5 ">
        <div class="container ">
          <div class="row my-5">
            <div class="col-lg-3 col-sm-6">
              <div class="single-box fon_weight_con">
             <h1 className="text__success pt-2 fw-bold">
                  T
                  <span className="heding_color">
                    opone <span className="text__success">T</span>alents
                  </span>{" "}
                  <p
                    className="mx-3"
                    style={{ color: "#76B9E2", fontSize: "15px" }}
                  >
                    -Hiring the Top One Percent -
                  </p>
                </h1>
                  

                <p className="py-4">
                  <i class="bi bi-geo-alt-fill text-primary"></i>
                  Block B, BRIGADE TECH PARK, Pattandur Agrahara, Whitefield,
                  Bengaluru, Karnataka 560066
                </p>
                <p class="socials change_clr_iiii">
                  <Link to="https://www.linkedin.com/in/topone-talents-7b5289301/" target="_blank">
                    {" "}
                    <i class="bi bi-linkedin mx-4  text_back   fs-5"></i>
                  </Link>
                  <Link to="https://twitter.com/TalentsTop56475" target="_blank">
                    {" "}
                    <i class="bi bi-twitter-x  text_back   fs-5"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box hover_footer_list">
                <h2 className="pt-2 ">Company</h2>
                <ul>
                  <li>
                    <a href="/AboutUs" className="fw-bold">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/RoadMap" className="fw-bold">
                      {" "}
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="/" className="fw-bold">
                      {" "}
                      Find Careers
                    </a>
                  </li>
                 
                  <li>
                    <a href="#" className="fw-bold">
                      {" "}
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box hover_footer_list">
                <h2 className="pt-2 ">Usefull Links</h2>
                <ul>
                  <li>
                    <a href="#" className="fw-bold">
                      {" "}
                      IT Staffing
                    </a>
                  </li>

                  <li>
                    <a href="#" className="fw-bold">
                      {" "}
                      Tech Staff Augmentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fw-bold">
                      {" "}
                      Direct Hiring - IT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fw-bold">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/Contact" className="fw-bold">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box">
                <h2 className="pt-2 ">Newsletter</h2>
                <form ref={form}  onSubmit={sendEmail} >
                <p className="fw-2 fw-bold">Write your email*</p>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Enter your Email ..."
                    aria-describedby="basic-addon2"
                    name='your_email'
                  />
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    name="message" 
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
                <div class="input-group mb-3 my-4 change_cclllcll">
                  <button
                    type="submit" value="Send"
                    class="btn text-white form-control bg__success fw-bold"
                  >
                    send
                  </button>
                </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
