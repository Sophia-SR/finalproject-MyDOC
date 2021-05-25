import React from "react";

import ImageSlider from "./ImageSlider.js";

import "./style.css";

function NHSApiClient() {
  const api = {
    key: `${process.env.NHS_API_KEY}`,
    base: "http://localhost:4000/external/nhs_pregnancy",
  };
  const [pregnancySlide, setPregnancySlide] = React.useState({});

  React.useEffect(() => {
    fetch(`${api.base}`)
      .then((res) => res.json())
      .then((result) => {
        setPregnancySlide(result);
        console.log(pregnancySlide);
      });
  });

  return (
    <div
      className="container"
      style={{ height: "90vh", margin: 0, padding: 0 }}
    >
      <main>
        <h1 align="center">My Doulas Of Color</h1>
        <p>
          My Doulas of Color App has been created in support of St. Louis’ local
          360 Doula Initiative - a partnership between Jamaa Birth Village Tru
          Kellman, CPM, CD, CLC, Executive & Clinical Director at Jamaa Birth
          Village. and STL Doulas of Color Collective
        </p>
        <ImageSlider props={pregnancySlide} />
        <p>
          MyD.O.C. is a directory that allows parents to virtually connect with
          certified birth doulas and professionals to deliver them the quality
          care that all women deserve.
        </p>
      </main>
    </div>
  );
}

//    {/* < ImageSlider prop={} />  */}

export default NHSApiClient;
