import { useState, useEffect, useContext } from "react";
import seedrandom from "seedrandom";
import { AppContext } from "../App";
import { countries } from "../data/countries";
import { IN_PROCESS } from "../constants";

const useToday = () => {
  const [countrySvg, setCountrySvg] = useState<any>();
  const { setCurrentCountry, numGuesses, game } = useContext(AppContext);
  const todayDate = new Date();
  const decimal = seedrandom(todayDate.toLocaleDateString())();
  const index = Math.floor(decimal * countries.length);
  const todayCountry = countries[index];

  useEffect(() => {
    const dynamicImport = async () => {
      const shape = await import(
        `../data/countries-shape-svg/${todayCountry.value.toLowerCase()}/vector.svg`
      );
      const flag = await import(
        `../data/countries-flag-svg/${todayCountry.value.toLowerCase()}.svg`
      );
      const countrySvg = { shape: shape.default, flag: flag.default };
      setCountrySvg(countrySvg);
      setCurrentCountry(todayCountry);
    };

    if (numGuesses === 0 && game === IN_PROCESS) {
      dynamicImport();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numGuesses, game]);

  return countrySvg;
};

export default useToday;

// Used to generate seed based on TODAY date, and use the seed to get the country for the day
