import React from "react";
import styled from "styled-components";
import "./styles.css";
import girl from "../../config/images/girl@2x.jpg";
import ski from "../../config/images/skiing@2x.jpg";
import wine from "../../config/images/wine@2x.jpg";
import coffee from "../../config/images/coffee@2x.jpg";
import Carousel from "nuka-carousel";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500
};

const Content = () => {
  return (
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
      <div className="middle-girl-desktop">
        <img className="girl" src={girl} alt="girl" />
        <div className="middle-girl-wordcontainer">
          <h2>Effortlessly Connected</h2>
          <span className="line" />
          <p>
            The best of the Okanagan on your doorstep, a contemporary place to
            call home - Coco House effortlessly connects you to an incredible
            lifestyle with 110 multi-family homes in Kelowna.
          </p>
        </div>
      </div>
      <div className="middle-carousel">
        <h2>Year-round living</h2>
        <Slider {...settings}>
          <div>
            <img src={ski} />
            <h3>Skiing & Snowboarding</h3>
            <p>
              Whether it’s a one-day getaway, or a few days of nothing but West
              Coast powder; Big White, Silver Star & Sun Peaks await you.
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
        </Slider>
      </div>
      <div>
        <h2 className="middle-noc-title">Year-round living</h2>
        <div className="middle-nocarousel-desktop">
          <div className="item-container">
            <img src={ski} />
            <h3 className="ski-title">Skiing & Snowboarding</h3>
            <div className="boxcontainer">
              <div className="words">
                <span className="wordtitle">Skiing & Snowboarding</span>
                <span className="sub">
                  Whether it’s a one-day getaway, or a few days of nothing but
                  West Coast powder; Big White, Silver Star & Sun Peaks await
                  you.
                </span>
              </div>
              <span className="left" />
              <span className="right" />
              <span className="topf" />
              <span className="bottomf" />
            </div>
            {/* <p>
            Whether it’s a one-day getaway, or a few days of nothing but West
            Coast powder; Big White, Silver Star & Sun Peaks await you.
          </p> */}
          </div>
          <div className="item-container">
            <img src={coffee} />
            <h3 className="ski-title">Café & Restaurants</h3>
            <div className="boxcontainer">
              <div className="words">
                <span className="wordtitle">Café & Restaurants</span>
                <span className="sub">
                  Adding to an already renowned menu of cafes and restaurants,
                  Kelowna’s new downtown makes your dining options endless.
                </span>
              </div>
              <span className="left" />
              <span className="right" />
              <span className="topf" />
              <span className="bottomf" />
            </div>
            {/* <p>
            Adding to an already renowned menu of cafes and restaurants,
            Kelowna’s new downtown makes your dining options endless.
          </p> */}
          </div>
          <div className="item-container">
            <img src={wine} />
            <h3 className="ski-title">Wineries & Breweries</h3>
            <div className="boxcontainer">
              <div className="words">
                <span className="wordtitle">Wineries & Breweries</span>
                <span className="sub">
                  Adding to an already renowned menu of cafes and restaurants,
                  Kelowna’s new downtown makes your dining options endless.
                </span>
              </div>
              <span className="left" />
              <span className="right" />
              <span className="topf" />
              <span className="bottomf" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
