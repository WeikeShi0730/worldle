import { useState, useEffect, useContext } from "react";
import { countries } from "../data/countries";
import { AppContext } from "../App";
import { IN_PROCESS } from "../constants";

const useNewCountry = () => {
  const [countrySvg, setCountrySvg] = useState<any>();
  const { setCurrentCountry, numGuesses, game } = useContext(AppContext);
  const randomIndex = Math.floor(Math.random() * 246);
  const currentCountry = countries[randomIndex];

  useEffect(() => {
    const dynamicImport = async () => {
      const shape = await import(
        `../data/countries-shape-svg/${currentCountry.value.toLowerCase()}/vector.svg`
      );
      const flag = await import(
        `../data/countries-flag-svg/${currentCountry.value.toLowerCase()}.svg`
      );
      const countrySvg = { shape: shape.default, flag: flag.default };
      setCountrySvg(countrySvg);
      setCurrentCountry(currentCountry);
    };

    if (numGuesses === 0 && game === IN_PROCESS) {
      dynamicImport();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numGuesses, game]);

  return countrySvg;
};

export default useNewCountry;
