import { default as CountrySvg } from "../data/countries-svg/ca/vector.svg";

const CurrentCountry = () => {
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md m-auto p-10">
      <img src={CountrySvg} alt="Country SVG" />
    </div>
  );
};

export default CurrentCountry;
