import React, { Component } from "react";
import "./styles.css";
import styled from "styled-components";

import logo from "../config/images/CH_logo.png";
import girl from "../config/images/girl@2x.jpg";
import ski from "../config/images/skiing@2x.jpg";
import wine from "../config/images/wine@2x.jpg";
import coffee from "../config/images/coffee@2x.jpg";
import Carousel from "nuka-carousel";
import Form from "../components/Form";

const ButtonTrue = styled.button`
  font-size: 24px;
  color: #262626;
  letter-spacing: 0;
  background-color: #ffd200;
  border-style: none;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="register-container">
            <ButtonTrue>REGISTER NOW</ButtonTrue>
          </div>
          <div className="top-center-container">
            <img className="top-logo" src={logo} alt="logo" />
            <h1>COCO HOUSE</h1>
            <span>A BETTER LIFE</span>
          </div>
        </div>
        <div className="middle">
          <div className="middle-girl">
            <h2>Effortlessly Connected</h2>
            <img className="girl" src={girl} alt="girl" />
            <p>
              The best of the Okanagan on your doorstep, a contemporary place to
              call home - Coco House effortlessly connects you to an incredible
              lifestyle with 110 multi-family homes in Kelowna.
            </p>
          </div>
          <div className="middle-carousel">
            <h2>Year-rount living</h2>
            <Carousel>
              <div>
                <img src={ski} />
                <h3>Skiing & Snowboarding</h3>
                <p>
                  Whether it’s a one-day getaway, or a few days of nothing but
                  West Coast powder; Big White, Silver Star & Sun Peaks await
                  you.
                </p>
              </div>
              <div>
                <img src={coffee} />
                <h3>Café and Restaurants</h3>
                <p>
                  Adding to an already renowned menu of cafes and restaurants,
                  Kelowna’s new downtown makes your dining options endless.
                </p>
              </div>
              <div>
                <img src={wine} />
                <h3>Wineries and Breweries</h3>
                <p>
                  Adding to an already renowned menu of cafes and restaurants,
                  Kelowna’s new downtown makes your dining options endless.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Home;
