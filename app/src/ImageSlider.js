import React from "react";

import {
  ArrowForwardIosIcon,
  ArrowBackwardIosIcon,
} from "@material-ui/icons/ArrowForwardIos";

import { SliderData } from "./SliderData";

export const ImageSlider = ({ slides = { SliderData } }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <ArrowForwardIosIcon className="left-arrow" onClick={prevSlide} />
      <ArrowBackwardIosIcon className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};
