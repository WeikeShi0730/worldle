import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { getDistance, convertDistance } from "geolib";

const Game = () => {
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
      console.log(distance);
    }
  }, [currentCountry, numGuesses, selectedCountries]);

  return <div>Game</div>;
};

export default Game;
