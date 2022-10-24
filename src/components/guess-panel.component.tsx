import { useContext } from "react";
import { CountryType } from "../interfaces";
import { AppContext } from "../App";

type GuessPanelType = {
  selectedCountry: CountryType;
};

const GuessPanel = ({ selectedCountry }: GuessPanelType) => {
  const { todayCountry, unit } = useContext(AppContext);
  const distance = selectedCountry.distance
    ? unit
      ? selectedCountry.distance + "KM"
      : Math.round(selectedCountry.distance / 1.609) + "MI"
    : null;

  return (
    <div className="flex w-full h-10 my-1 rounded text-white text-sm md:text-base">
      <div className="country flex justify-center items-center w-7/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {todayCountry.value !== undefined &&
        selectedCountry.value === todayCountry.value
          ? "📍"
          : distance}
      </div>
      <div className="direction flex justify-center items-center w-2/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {todayCountry.value !== undefined &&
        selectedCountry.value === todayCountry.value
          ? "📍"
          : selectedCountry.direction}
      </div>
    </div>
  );
};

export default GuessPanel;
