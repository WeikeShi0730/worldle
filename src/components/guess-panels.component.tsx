import { useContext } from "react";
import GuessPanel from "./guess-panel.component";
import { AppContext } from "../App";
import useGame from "../utils/useGame";
import { differenceType } from "../interfaces";

const GuessPanels = () => {
  const [difference] = useGame();
  const { selectedCountries } = useContext(AppContext);
  // console.log(difference)

  return (
    <div>
      {selectedCountries.map((selectedCountry, index) => {
        return (
          <div
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto"
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
