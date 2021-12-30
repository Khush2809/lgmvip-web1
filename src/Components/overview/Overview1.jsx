import React from "react";
import { BsDownload } from "react-icons/bs";
import "../../sass/styles.scss";

const Overview1 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="overview1">
        <div className="overview1-content">
          <div className="card-icon">
            {" "}
            <BsDownload />
          </div>
          <p className="overview1-heading">
            1,25,000 Customers Using The Application!
          </p>
          <p className="overview1-para">
            Collaborate over projects with your team and clients optimised for
            mobile and tablet don't let slow page speeds drive our innovative
            platform empowers anyone to convert clicks ou'll publish your first
            landing page in minutes.
          </p>
          <button>Get Started</button>
        </div>
        <div className="overview1-img">
          <img
            src="https://preview.uideck.com/items/appvilla/assets/images/app-ss/app-ss1.png"
            style={{ height: "80%" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Overview1;
