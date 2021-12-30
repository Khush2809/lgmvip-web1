import React from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { GiRecycle } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { SiDatabricks } from "react-icons/si";
import { Card } from "react-bootstrap";
import "./../sass/styles.scss";

const Features = () => {
  return (
    <div className="feature-container">
      <div className="upper-container">
        <div>
          <h4>FEATURES</h4>
        </div>
        <div>
          <p className="tagline1">
            Your Experience Gets Better And Better Over Time.
          </p>
        </div>
        <div>
          <p className="tagline2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <BsCloudArrowUp />
                </div>
                <p className="feature-heading">Push to Deploy</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <AiOutlineLock />
                </div>
                <p className="feature-heading">SSL Certificates</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <GiRecycle />
                </div>
                <p className="feature-heading">Simple Queues</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <MdOutlineSecurity />
                </div>
                <p className="feature-heading">Push to Deploy</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <FiSettings />
                </div>
                <p className="feature-heading">SSL Certificates</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
            <div className="col d-flex justify-content-center">
              <Card className="feature-card">
                <div className="card-icon">
                  {" "}
                  <SiDatabricks />
                </div>
                <p className="feature-heading">Simple Queues</p>
                <p className="feature-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
