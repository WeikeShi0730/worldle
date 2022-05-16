import React from "react";
import { default as CountrySvg } from "../data/countries-svg/ca/vector.svg";

// country image api:
const CurrentCountry = () => {
  return (
    <div>
      CurrentCountry
      <div className="w-10 h-10">
        <img src={CountrySvg} alt="Country SVG"/>
        {/* <CountrySvg /> */}
      </div>
    </div>
  );
};

export default CurrentCountry;
