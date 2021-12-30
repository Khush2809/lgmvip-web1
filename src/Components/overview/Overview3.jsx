import React from "react";

const Overview3 = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundColor: "#ff6c84",
        padding: "10% 5% 10% 5%",
        color: "white",
      }}
    >
      <div className="d-flex justify-content-center flex-column">
        <p className="overview3-heading d-flex justify-content-center">
          Trusted by developers from over 80 planets
        </p>
        <p className="overview3-para d-flex justify-content-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </p>
        <div class="container achievements">
          <div class="row d-flex justify-content-between">
            <div class="col d-flex justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <div class="amount">100%</div>
                <div class=" ">Satisfaction</div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="d-flex flex-column justify-content-center ">
                <div class="amount">120K</div>
                <div class=" ">Happy Users</div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="d-flex flex-column justify-content-center ">
                <div class="amount">125k+</div>
                <div class="">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview3;
