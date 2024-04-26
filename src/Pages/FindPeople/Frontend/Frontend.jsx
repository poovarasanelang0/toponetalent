
import "../../FindPeople/allcss/allcss.css";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import Htmlcss from "../assets/screen-html5-devs.jpg";
import Reactjs from "../assets/1rect.png";
import Ang_img from "../assets/Angular_full_color_logo.svg.png";
import Jva_img from "../assets/download.jpeg";
import frontlogo from "../assets/images.png";
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const Frontend = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />
      <div className="container background_img_frontend"></div>
      <div className="container py-5">
        <div className="row">
          {/* 1st */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Htmlcss}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Html & Css
                </h5>
                <p>
                  No, the CSS content property cannot be used to insert HTML. It
                  can only insert text, images, counters, and attribute values.
                  If you need to insert HTML, you should do it directly in the
                  HTML document or use JavaScript.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Reactjs}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  React js
                </h5>
                <p>
                  A React component that subscribes to context changes. Using
                  this component lets you subscribe to a context within a
                  function component. you should do it directly in the HTML
                  document or use JavaScript.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Ang_img}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Anaglur
                </h5>
                <p>
                  Angular Content projection is basically a way to reuse
                  component content in Angular that is more generic in scope
                  than passing data or content from parent to child component or
                  vice versa. .
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Jva_img}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Java Script & TypeScript
                </h5>
                <p>
                  TypeScript is known as an Object-oriented programming language
                  whereas JavaScript is a prototype-based language e JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <img src={frontlogo} alt="dd" className="img-fluid"></img>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
};

export default Frontend;
