import React from "react";
// import "./banner.css";
export default function Banner() {
  return (
    <>
      <div class="banner">
        <div class="row" data-aos-delay="50" data-aos-duration="500">
          <div class="col-2" >
            <img
              className="img"
              src={"assets/DEAL.jpg"}
              height={"350px"}
              width={"450px"}
            />
          </div>
          <div class="col-2">
            <h5>Best Price For YOU... </h5>
            <h1>Deal of The Day!! </h1>
            <p>
              success is not always about greatness.its about
              consistency.consistent hard work gains success.greatness will come
            </p>
            <a href="" class="btn">
              Buy Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
