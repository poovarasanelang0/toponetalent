import React from 'react'




const HomeClientinfo = () => {
  return (
    <>


<div className="container shadow rounded-5 p-5">
        <body>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <span className="S_H_Col fw-bold fs-4">
                  Average Annual Return
                </span>
                <h1>Count All Investments Completed</h1>
                <p className="text-secondary">
                  Before investing your money in Skill fund, make sure you
                  research the market and find skills that are worth investing
                  in.
                </p>
              </div>
            </div>
          </div>
        </body>

        <body>
          <div className="container mt-5">
            <div className="row d-flex gap-4 justify-content-around">
              <div className="col-sm-2 text-center bg-light rounded-3">
                <p>
                  <img
                    src={active_investors_icon}
                    alt="active_investors_icon"
                    className="average_return_pics_size mt-2 rounded-pill"
                  />
                </p>
                <p className="TC fs-3 fw-bold">5K +</p>
                <p className="fw-bold">Active Investors</p>
              </div>
              <div className="col-sm-2 text-center bg-light rounded-3">
                <p>
                  <img
                    src={total_transaction}
                    alt="total_transaction"
                    className="average_return_pics_size mt-2 rounded-pill"
                  />
                </p>
                <p className="TC fs-3 fw-bold">₹8.6L +</p>
                <p className="fw-bold">Total Transaction</p>
              </div>
              <div className="col-sm-2 text-center bg-light rounded-3">
                <p>
                  <img
                    src={investor_earned}
                    alt="investor_earned"
                    className="average_return_pics_size mt-2 rounded-pill"
                  />
                </p>
                <p className="TC fs-3 fw-bold">₹5.4L +</p>
                <p className="fw-bold">Investors Earned</p>
              </div>
              <div className="col-sm-2 text-center bg-light rounded-3">
                <p>
                  <img
                    src={happy_clients}
                    alt="happy_clients"
                    className="average_return_pics_size mt-2 rounded-pill"
                  />
                </p>
                <p className="TC fs-3 fw-bold">15K +</p>
                <p className="fw-bold">Happy Clients</p>
              </div>
              <div className="col-sm-2 text-center bg-light rounded-3">
                <p>
                  <img
                    src={project_done}
                    alt="project_done"
                    className="average_return_pics_size mt-2 rounded-pill"
                  />
                </p>
                <p className="TC fs-3 fw-bold">568+</p>
                <p className="fw-bold">Projects Done</p>
              </div>
            </div>
          </div>
        </body>
      </div>

      
    </>
  )
}

export default HomeClientinfo
