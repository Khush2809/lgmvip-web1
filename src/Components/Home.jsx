import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#ff6c84" }}
    >
      <div className="home">
        <div className="home-content">
          {/* <div className="card-icon">
            {" "}
            <BsDownload />
          </div> */}
          <p className="home-heading">A Powerful App For Your Business.</p>
          <p className="home-para">
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <div className="d-flex justify-content-between">
            <button>
              <i>
                <AiOutlineApple />
              </i>
              App Store
            </button>
            <button>
              <i>
                <IoLogoGooglePlaystore />
              </i>
              App Store
            </button>
          </div>{" "}
        </div>
        <div className="home-img">
          <img src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
