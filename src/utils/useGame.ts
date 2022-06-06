import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { differenceType } from "../interfaces/index";
import { getDistance, convertDistance, getCompassDirection } from "geolib";

const useGame = () => {
  const [difference, setDifference] = useState<differenceType>({
    distance: 0,
    direction: "",
  });
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
        getDistance(currentCountryPos, selectedCountryPos),
        "km"
      );
      const direction = getCompassDirection(
        currentCountryPos,
        selectedCountryPos
      );
      setDifference({
        distance,
        direction,
      });
    }
  }, [currentCountry, numGuesses, selectedCountries]);

  return difference;
};

export default useGame;
