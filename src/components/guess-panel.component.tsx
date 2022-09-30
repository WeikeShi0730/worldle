import { useContext } from "react";
import { CountryType } from "../interfaces";
import { AppContext } from "../App";

type GuessPanelType = {
  selectedCountry: CountryType;
  // difference: differenceType;
};

const GuessPanel = ({ selectedCountry }: GuessPanelType) => {
  const { todayCountry } = useContext(AppContext);

  return (
    <div className="flex w-full h-10 my-1 rounded text-white text-sm md:text-base">
      <div className="country flex justify-center items-center w-7/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {todayCountry.value !== undefined &&
        selectedCountry.value === todayCountry.value
          ? "✅"
          : selectedCountry.distance
          ? selectedCountry.distance + "KM"
          : null}
      </div>
      <div className="direction flex justify-center items-center w-2/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        {todayCountry.value !== undefined &&
        selectedCountry.value === todayCountry.value
          ? "✅"
          : selectedCountry.direction}
      </div>
    </div>
  );
};

export default GuessPanel;
