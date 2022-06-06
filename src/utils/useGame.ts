import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { differenceType } from "../interfaces/index";
import { getDistance, convertDistance, getCompassDirection } from "geolib";

const useGame = () => {
  const [difference, setDifference] = useState<differenceType[]>([
    {},
    {},
    {},
    {},
    {},
    {},
  ] as differenceType[]);
  const { currentCountry, selectedCountries, numGuesses } =
    useContext(AppContext);

  useEffect(() => {
    if (numGuesses > 0) {
      const currentCountryPos = {
        latitude: currentCountry.latitude,
        longitude: currentCountry.longitude,
      };
      const selectedCountryPos = {
        latitude: selectedCountries[numGuesses - 1]?.latitude,
        longitude: selectedCountries[numGuesses - 1]?.longitude,
      };
      const distance = convertDistance(
        getDistance(currentCountryPos, selectedCountryPos, 1000),
        "km"
      );
      const direction = getCompassDirection(
        currentCountryPos,
        selectedCountryPos
      );
      let newDifferenceArray = difference;
      newDifferenceArray[numGuesses - 1] = { distance, direction };
      setDifference(newDifferenceArray);
      console.log(newDifferenceArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCountry, numGuesses, selectedCountries]);

  return difference;
};

export default useGame;
