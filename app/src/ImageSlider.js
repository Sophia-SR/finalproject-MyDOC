/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

import AdobeStock_214475030 from "./images/AdobeStock_214475030.jpeg";
import AdobeStock_221592135 from "./images/AdobeStock_221592135.jpeg";
import AdobeStock_261977708 from "./images/AdobeStock_261977708.jpeg";
import AdobeStock_287405343 from "./images/AdobeStock_287405343.jpeg";
import AdobeStock_417541255 from "./images/AdobeStock_417541255.jpeg";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <h3>{index}</h3>
      </div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    //const { slideData } = this.props
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <CustomSlide
            index={
              <img
                src="https://media.self.com/photos/5de6c5e5c358f0000871d266/master/pass/unnamed-2.jpg"
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
          <CustomSlide
            index={
              <img
                src={AdobeStock_221592135}
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
          <CustomSlide
            index={
              <img
                src={AdobeStock_214475030}
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
          <CustomSlide
            index={
              <img
                src={AdobeStock_417541255}
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
          <CustomSlide
            index={
              <img
                src={AdobeStock_261977708}
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
          <CustomSlide
            index={
              <img
                src={AdobeStock_287405343}
                alt="pregnancy pic
                "
                style={{ height: "100px", width: "250px" }}
              />
            }
          />
        </Slider>
      </div>
    );
  }
}
