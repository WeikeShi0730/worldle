import { useContext } from "react";
import GuessPanel from "./guess-panel.component";
import { AppContext } from "../App";
const GuessPanels = () => {
  const { selectedCountries } = useContext(AppContext);
  return (
    <div className="w-full">
      {selectedCountries.map((selectedCountry, index) => {
        return (
          <div className="" key={index}>
            <GuessPanel selectedCountry={selectedCountry}></GuessPanel>
          </div>
        );
      })}
    </div>
  );
};

export default GuessPanels;
