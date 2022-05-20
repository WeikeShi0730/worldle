import { default as CountrySvg } from "../data/countries-svg/ca/vector.svg";

const CurrentCountry = () => {
  return (
    <div>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-10">
        <img src={CountrySvg} alt="Country SVG" />
      </div>
    </div>
  );
};

export default CurrentCountry;
