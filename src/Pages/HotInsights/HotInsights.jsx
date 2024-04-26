import { useState } from "react";
import "./HotInsights.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HotInsights = () => {
  const [selectedContent, setSelectedContent] = useState(
    "Recruitment Industry"
  );

  const handleDropdownChange = (event) => {
    setSelectedContent(event.target.value);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid background_img_hot">
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 text-center">
              <h1 className=" fw-bold px-4 py-4 colore_heading ">
                Hot Insights from
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-12 text-center">
              <div className="bg-transparent mx-5 my-4 px-5">
                <select
                  className="form-select custom-select"
                  id="contentSelector"
                  value={selectedContent}
                  onChange={handleDropdownChange}
                >
                  <option value="Recruitment Industry">
                    Recruitment Industry
                  </option>
                  <option value="Report">Report</option>
                  <option value="Workplace Dynamics">Workplace Dynamics</option>
                  <option value="Engineering Servics">
                    Engineering Servics
                  </option>
                  <option value="Direct Hire">Direct Hire</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex"></div>

          {/* Rendering content based on selected option */}
          {selectedContent === "Recruitment Industry" && (
            <div className="row py-1">
              <div
                className="col-lg-6 col-md-6 col-12  back_color"
                style={{
                  boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                  padding: "10px",
                }}
              >
                <h3 className="text-white fw-bold py-1">
                  How an Effective Onboarding Process Can Benefit the Employee
                  and Employer?
                </h3>
                <img
                  src="https://www.xpheno.com/blogs/wp-content/uploads/2023/01/onboarding-process-Thumbnail.png"
                  alt="img"
                  className="img-fluid"
                  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                ></img>
                <p className="fw-bold text-white py-1 my-5">
                  6 advantages of effective onboarding: Shortening the learning
                  curve, Building communication channels, Performance
                  enhancement, Building trust, and Talent attraction and
                  retention
                </p>
                <div className="button_color my1 ">
                  <button
                    class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                    type="submit"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="frist_div "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Anonymous Recruitment
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_frist_div">
                      <p className="text-white fw-bold fz-3">
                        Anonymous job applications strike a lot of debate in the
                        recruiter world. It is a choice made by companies
                        targeting...
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_frist_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/04/hiring_adapt.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  className="Second_div my-5 "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Active Jobs: A 2022 Overview
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_Second_div">
                      <p className="text-white fw-bold fz-3">
                        The Core of Performance
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_Second_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2020/08/the-core-of-performance-ICON-300x300-1.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedContent === "Report" && (
            <div className="row py-1">
              <div
                className="col-lg-6 col-md-6 col-12  back_color"
                style={{
                  boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                  padding: "10px",
                }}
              >
                <h3 className="text-white fw-bold py-1">
                  Most employable degrees in India in 2023
                </h3>
                <img
                  src="https://www.xpheno.com/blogs/wp-content/uploads/2023/01/employable-degrees-Thumbnail.png"
                  alt="img"
                  className="img-fluid"
                  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                ></img>
                <p className="fw-bold text-white py-1 my-5">
                  Most employable degrees in India in 2023: Data Analyst,
                  Artificial Intelligence, Blockchain Technology, Product
                  Design, Medical Science and Technology and more
                </p>
                <div className="button_color my1 ">
                  <button
                    class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                    type="submit"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="frist_div "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Workplace Rights and Rules every fresher should know
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_frist_div">
                      <p className="text-white fw-bold fz-3">
                        Starting a new job can be daunting, especially if it is
                        your first time. Freshers entering the corporate world
                        often worry about navigating the various rules and
                        expectations at the workplace...
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_frist_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2023/01/Employment-Laws-and-Workplace-Rules-Subrato-Thumbnail-1.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  className="Second_div my-5 "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Active Jobs: A 2022 Overview
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_Second_div">
                      <p className="text-white fw-bold fz-3">
                        Active jobs in 2022 have been very low, but October
                        brought some signs of hope. Compared to October 2021,
                        the number of active jobs in October 2022 was 30%
                        lower...
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_Second_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/12/Active-jobs-Thumbnail-L.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedContent === "Workplace Dynamics" && (
            <div className="row py-1">
              <div
                className="col-lg-6 col-md-6 col-12  back_color"
                style={{
                  boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                  padding: "10px",
                }}
              >
                <h3 className="text-white fw-bold py-1">
                  Best Jobs for Freshers in 2023
                </h3>
                <img
                  src="https://www.xpheno.com/blogs/wp-content/uploads/2023/02/Best-job-fresher-Thumbnail.jpg"
                  alt="img"
                  className="img-fluid"
                  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                ></img>
                <p className="fw-bold text-white py-1 my-5">
                  Best Jobs for Freshers in 2023: Cloud Computing, AI and Data
                  Science, Cyber and Network Security, Business Analytics, and
                  Digital Marketing
                </p>
                <div className="button_color my1 ">
                  <button
                    class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                    type="submit"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="frist_div "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Challenges Freshers Face In Their First Job
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_frist_div">
                      <p className="text-white fw-bold fz-3">
                        Being out of college and entering the corporate world
                        can be daunting and challenging for individuals. College
                        doesn't prepare us for the world outside and the
                        challenges of a job....
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_frist_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2023/02/Fresher-challenge-first-job-Thumbnail.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  className="Second_div my-5 "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    Workplace Rights and Rules every fresher should know
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_Second_div">
                      <p className="text-white fw-bold fz-3">
                        Starting a new job can be daunting, especially if it is
                        your first time. Freshers entering the corporate world
                        often worry about navigating the various rules and
                        expectations at the workplace
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_Second_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/12/Active-jobs-Thumbnail-L.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedContent === "Engineering Servics" && (
            <div className="row py-1">
              <div
                className="col-lg-6 col-md-6 col-12  back_color"
                style={{
                  boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                  padding: "10px",
                }}
              >
                <h3 className="text-white fw-bold py-1">
                  Chemical engineering talent availability
                </h3>
                <img
                  src="https://www.xpheno.com/blogs/wp-content/uploads/2023/02/Chemical-engineering-Thumbnail.jpg"
                  alt="img"
                  className="img-fluid"
                  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                ></img>
                <p className="fw-bold text-white py-1 my-5">
                  Chemical engineering is a branch of engineering that applies
                  the principles of chemistry, physics and math to the design,
                  development...
                </p>
                <div className="button_color my1 ">
                  <button
                    class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                    type="submit"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="frist_div "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    How to define hiring objectives that align with business
                    objectives
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_frist_div">
                      <p className="text-white fw-bold fz-3">
                        When companies recruit high-performing, competent
                        candidates, it streamlines the business processes.....
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_frist_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/12/hiring-business-objectives-Thumbnail.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  className="Second_div my-5 "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    What Qualities do IT Employers Seek When Hiring?
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_Second_div">
                      <p className="text-white fw-bold fz-3">
                        The IT marketplace is always abuzz with exciting energy.
                        It is also very competitive....
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_Second_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/11/IT-employees-hiring-thumbnail.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedContent === "Direct Hire" && (
            <div className="row py-1">
              <div
                className="col-lg-6 col-md-6 col-12  back_color"
                style={{
                  boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                  padding: "10px",
                }}
              >
                <h3 className="text-white fw-bold py-1">
                  5 Ways to Limit Employee Attrition
                </h3>
                <img
                  src="https://www.xpheno.com/blogs/wp-content/uploads/2023/01/Limit-employee-attrition-Thumbnail-1.jpg"
                  alt="img"
                  className="img-fluid"
                  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                ></img>
                <p className="fw-bold text-white py-1 my-5">
                  When employees leave organizations, it impacts the attrition
                  rate of the organization. The reasons why employees leave an
                  organization...
                </p>
                <div className="button_color my1 ">
                  <button
                    class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                    type="submit"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="frist_div "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    5 Strategies to Hire C-Level Talent
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_frist_div">
                      <p className="text-white fw-bold fz-3">
                        Leadership roles in companies are often difficult to
                        fill. These are roles where the best of talent is
                        required....
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_frist_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/12/C-Level-talent-thumbnail-1.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  className="Second_div my-5 "
                  style={{
                    boxShadow: "1px 5px 5px 4px rgba(0, 0, 0, 0.8)",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white fw-bold py-1">
                    5 Tips to Recruit Millennials
                  </h3>

                  <div className="d-flex my-4">
                    <div className="content_Second_div">
                      <p className="text-white fw-bold fz-3">
                        Millennials today form the largest segment of the
                        workforce and the fastest growing group of potential
                        recruits...
                      </p>
                      <div className="button_color my1 ">
                        <button
                          class=" border-0  d-flex justify-content-start px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="img_Second_div">
                      <img
                        src="https://www.xpheno.com/blogs/wp-content/uploads/2022/12/Recruit-Millenials-Thumbnail.jpg"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="button_color my-5 text-center  ">
            <button
              class=" border-0  px-5 mx-2 my-2 py-2 text-white fw-bold fs-5"
              type="submit"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotInsights;
