import { useContext } from "react";
import { CountryType, differenceType } from "../interfaces";
import { AppContext } from "../App";

type GuessPanelType = {
  selectedCountry: CountryType;
  difference: differenceType;
};

const GuessPanel = ({ selectedCountry, difference }: GuessPanelType) => {
  const { currentCountry } = useContext(AppContext);

  return (
    <div className="flex w-full h-10 my-1 rounded text-white">
      <div className="country flex justify-center items-center w-7/12 border-2 rounded">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded">
        {selectedCountry.value === currentCountry.value
          ? "✅"
          : difference.distance
          ? difference.distance + "KM"
          : null}
      </div>
      <div className="direction flex justify-center items-center w-2/12 border-2 rounded">
        {selectedCountry.value === currentCountry.value
          ? "✅"
          : difference.direction}
      </div>
    </div>
  );
};

export default GuessPanel;
