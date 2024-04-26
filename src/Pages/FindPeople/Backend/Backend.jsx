import React from "react";
import "../../FindPeople/allcss/allcss.css";
import JavaImg from "../assets/java.jpg";
import Python from "../assets/python.png";
import php from "../assets/php.jpg";
import nodejs from "../assets/nodejs.png";
import frontlogo from "../assets/images.png";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
const Backend = () => {
  return (
    <>
      <Header />
      <div className="container background_img_backend"></div>
      <div className="container py-5">
        <div className="row">
          {/* 1st */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={JavaImg}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">Java</h5>
                <p>
                  Java defines the syntax and semantics of the Java programming
                  language. This includes the basic vocabulary and rules used to
                  write algorithms such as primitive data types, if/else blocks,
                  loops, etc.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Python}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Python
                </h5>
                <p>
                  Python, "content" generally refers to the information stored
                  within variables, files, data structures, or objects. It can
                  encompass text, numbers, collections of data, or any other
                  type of information manipulated or processed within a Python
                  program
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={php}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">Php</h5>
                <p>
                  The term PHP is an acronym for – Hypertext Preprocessor. PHP
                  is a server-side scripting language designed specifically for
                  web development. It is open-source which means it is free to
                  download and use. It is very simple to learn and use.
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={nodejs}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Node Js
                </h5>
                <p>
                  Why the Hell Would I Use Node.js? A Case-by-case Tutorial ...
                  Node. js is composed of Google's V8 JavaScript engine, the
                  libUV platform abstraction layer, and a core library that is
                  written in JavaScript. Additionally, Node. js is based on the
                  open web stack (HTML, CSS, and JS), and operates over the
                  standard port 80
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
      <div className="row">
        <img src={frontlogo} alt="dd" className="img-fluid"></img>
      </div>
    </div> */}

      <br />
      <Footer />
    </>
  );
};

export default Backend;
