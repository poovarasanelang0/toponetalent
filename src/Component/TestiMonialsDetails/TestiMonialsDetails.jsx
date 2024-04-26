import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect bdaiuikdnkjbjd ">
        <img class="w-100" src={img} />
        <h5 className="fw-bold pt-4 text- fs-3">{name}</h5>
        <small className="fw-bold">{address}</small>
        <br />
        <button>View details</button>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;