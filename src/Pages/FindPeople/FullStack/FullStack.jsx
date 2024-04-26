import React from 'react'
import "../../FindPeople/allcss/allcss.css"
import JavaImg from "../assets/java.jpg";
import Python from "../assets/python.png";
import php from "../assets/php.jpg";
import nodejs from "../assets/nodejs.png";


import Htmlcss from "../assets/screen-html5-devs.jpg";
import Reactjs from "../assets/1rect.png";
import Ang_img from "../assets/Angular_full_color_logo.svg.png";
import Jva_img from "../assets/download.jpeg";

import Sql from "../assets/sql.png";
import Mysql from "../assets/mysql.png";
import Mongo from "../assets/mongodb_thumbnail.webp";
import Orcle from "../assets/orcle.png";


import Header from '../../../Component/Header/Header';
import Footer from '../../../Component/Footer/Footer';

const FullStack = () => {
  return (
    <>
    <Header/>
    <div className="container background_img_full"></div>
    <div className="container py-5">
        <div className="row">
          {/* 1st */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Sql}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Sql
                </h5>
                <p>
                SQL (Structured Query Language) is a language to operate databases; it includes Database Creation, Database Deletion, Fetching Data Rows, Modifying & Deleting Data rows, etc.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Mysql }
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Mysql
                </h5>
                <p>
                  
MySQL Database is a client/server system that consists of a multithreaded SQL server that supports different back ends, several different client programs and libraries, administrative tools, and a wide range of application-programming interfaces (APIs).
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Mongo}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                  Mongodb
                </h5>
                <p>
                  
Once you're connected to the MongoDB server, you can retrieve the list of databases by using the show dbs command. Simply type show dbs in the MongoDB shell, and it will display a list of all the available databases.
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card_container border-0 shadow-lg rounded-2">
              <img
                src={Orcle}
                className="card-img-top"
                alt="ProfileImage"
                style={{ height: "190px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bolder p-1">
                Orcle
                </h5>
                <p>
                Oracle Content Management (OCM) provides a content apps platform which allows you to develop and deploy web applications that run in the context of Oracle Content Management (using it as the content management system).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


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
   

    <br />
    <Footer />
  </>
  )
}

export default FullStack
