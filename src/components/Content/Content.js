import React from "react";
import styled from "styled-components";
import "./styles.css";
import girl from "../../config/images/girl@2x.jpg";
import ski from "../../config/images/skiing@2x.jpg";
import wine from "../../config/images/wine@2x.jpg";
import coffee from "../../config/images/coffee@2x.jpg";
import Carousel from "nuka-carousel";

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
      <div className="middle-carousel">
        <h2>Year-rount living</h2>
        <Carousel>
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
        </Carousel>
      </div>
    </div>
  );
};

export default Content;
