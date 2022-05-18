import { default as CountrySvg } from "../data/countries-svg/ca/vector.svg";

const CurrentCountry = () => {
  return (
    <div>
      CurrentCountry
      <div className="w-10 h-10">
        <img src={CountrySvg} alt="Country SVG"/>
      </div>
    </div>
  );
};

export default CurrentCountry;
