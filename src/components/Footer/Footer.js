import React from "react";
import "./styles.css";
import map from "../../config/images/map@2x.jpg";
import konnect from "../../config/images/konnect_logo@2x.png";
import oakwyn from "../../config/images/oakywyn_logo@2x.png";

const Footer = () => {
  return (
    <div className="master-foot-container">
      <div className="footerContainer">
        <div className="footerImageContainer">
          <img className="map" src={map} />
        </div>
        <div className="footerTextContainer">
          <div className="footerInfo">
            <span className="info">For more information, call or email</span>
            <span className="otherInfo">250.888.8888</span>
            <span className="otherInfoCoco">
              {"info@cocohouse.ca".toUpperCase()}
            </span>
          </div>
          <div className="footerAddress">
            <span className="addressInfo">Site Address</span>
            <span className="otherAddressInfo">
              {"1234 pacific avenue,".toUpperCase()}
            </span>
            <span className="otherAddressInfo">
              {"kelowna bc".toUpperCase()}
            </span>
          </div>
          <div className="credentials">
            <div className="devBy">
              <span className="devTitle">Developed By</span>
              <img className="konnect" src={konnect} />
            </div>
            <div className="salesBy">
              <span className="saleTitle">Sales & Marketing</span>
              <img className="oakwyn" src={oakwyn} />
            </div>
          </div>
          <div className="terms">
            <span>
              This is not an offering for sale. Such offering can only be made
              by way of disclosure statements. Coco House is developed by
              Konnect Developments. Renderings, sketches, plans and finishes are
              representational only. Prices subject to change. E&O.E.
            </span>
          </div>
        </div>
      </div>
      <div className="outfootercontainer">
        <div className="footerContainer1">
          <div className="footerImageContainer">
            <img className="map" src={map} />
          </div>
          <div className="footerTextContainer">
            <div className="infocontainer">
              <div className="footerInfo">
                <span className="info">
                  For more information, call or email
                </span>
                <span className="otherInfo">250.888.8888</span>
                <span className="otherInfoCoco">
                  {"info@cocohouse.ca".toUpperCase()}
                </span>
              </div>
              <div className="terms">
                <span>
                  This is not an offering for sale. Such offering can only be
                  made by way of disclosure statements. Coco House is developed
                  by Konnect Developments. Renderings, sketches, plans and
                  finishes are representational only. Prices subject to change.
                  E&O.E.
                </span>
              </div>
            </div>
            <div className="addresscontainer">
              <div className="footerAddress">
                <span className="addressInfo">Site Address</span>
                <span className="otherAddressInfo">
                  {"1234 pacific avenue,".toUpperCase()}
                </span>
                <span className="otherAddressInfo">
                  {"kelowna bc".toUpperCase()}
                </span>
              </div>
              <div className="credentials">
                <div className="devBy">
                  <span className="devTitle">Developed By</span>
                  <img className="konnect" src={konnect} />
                </div>
                <div className="salesBy">
                  <span className="saleTitle">Sales & Marketing</span>
                  <img className="oakwyn" src={oakwyn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
