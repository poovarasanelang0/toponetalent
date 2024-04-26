import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <Header />
      <br />
      <div className="container my-2">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src="https://img1.wsimg.com/isteam/ip/6295619f-dab2-4971-b439-d25c350fc76b/blob-0007.png/:/cr=t:0%25,l:5.79%25,w:88.42%25,h:100%25/rs=w:400,h:301,cg:true"
              alt=""
              className="img-fluid my-5"
            />
          </div>
          <div className="col-lg-1 col-md-1 col-0"></div>
          <div className="col-lg-7 col-md-7 col-12">
            <h2 className="text_color fw-bold py-3">Why TOPONE TALENTS..?</h2>
            <div className="frist_div_content">
              <h3 className="fw-bold">Our Strength</h3>
              <p>
                {" "}
                The Spirit of Topone Talents is the core of Topone Talent. These
                are our Values. It is about who we are. It is our character. It
                is reflected consistently in all our behavior. The Spirit is
                deeply rooted in the unchanging essence of Wipro. But it also
                embraces what we must aspire to be. It is the indivisible
                synthesis of the four values. The Spirit is a beacon. It is what
                gives us direction and a clear sense of purpose. It energizes us
                and is the touchstone for all that we do.{" "}
              </p>
            </div>
            <div className="frist_div_content">
              <h3 className="fw-bold">
                Be Passionate about the Client's Success
              </h3>
              <p>
                {" "}
                We succeed when we make our clients successful. We collaborate
                to sharpen our insights and amplify this success. We execute
                with excellence. Always.{" "}
              </p>
            </div>
            <div className="frist_div_content">
              <h3 className="fw-bold">Be global & responsible</h3>
              <p>
                {" "}
                We will be global in our thinking and our actions. We are
                responsible citizens of the world. We are energized by the deep
                connectedness between people, ideas, communities and the
                environment.{" "}
              </p>
            </div>
            <div className="frist_div_content">
              <h3 className="fw-bold">Treat each person with respect</h3>
              <p>
                {" "}
                We treat every human being with respect. We nurture an open
                environment where people are encouraged to learn, share and
                grow. We embrace diversity of thought, of cultures, and of
                people.{" "}
              </p>
            </div>
            <div className="frist_div_content">
              <h3 className="fw-bold">
                Unyielding integrity in everything we do
              </h3>
              <p>
                {" "}
                Integrity is our core and is the basis of everything. It is
                about following the law, but it’s more. It is about delivering
                on our commitments. It is about honesty and fairness in action.
                It is about being ethical beyond any doubt, in the toughest of
                circumstances.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
