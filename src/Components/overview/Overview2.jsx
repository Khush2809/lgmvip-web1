import React from "react";
import { SiCoderwall } from "react-icons/si";
import "../../sass/styles.scss";
const Overview2 = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="overview1">
          <div className="overview1-img">
            <img
              src="https://preview.uideck.com/items/appvilla/assets/images/app-ss/app-ss2.png"
              style={{ height: "80%" }}
            ></img>
          </div>
          <div className="overview2-content">
            <div className="card-icon">
              {" "}
              <SiCoderwall />
            </div>
            <p className="overview1-heading">Seamless Loyalty</p>
            <p className="overview1-para">
              Collaborate over projects with your team and clients optimised for
              mobile and tablet don't let slow page speeds drive our innovative
              platform empowers anyone to convert clicks ou'll publish your
              first landing page in minutes.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview2;
