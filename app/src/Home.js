import React from "react";

import ImageSlider from "./ImageSlider.js";
import { SliderData } from "./SliderData.js";

const Home = () => {
  return (
    <div>
      Home is where the heart is
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default Home;
