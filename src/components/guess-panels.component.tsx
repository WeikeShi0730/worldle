import { useContext } from "react";
import GuessPanel from "./guess-panel.component";
import { AppContext } from "../App";
import { differenceType } from "../interfaces";

const GuessPanels = () => {
  const { difference } = useContext(AppContext);
  const { selectedCountries } = useContext(AppContext);

  return (
    <div>
      {selectedCountries.map((selectedCountry, index) => {
        return (
          <div
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto px-5"
            key={index}
          >
            <GuessPanel
              selectedCountry={selectedCountry}
              difference={difference[index] as differenceType}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GuessPanels;
