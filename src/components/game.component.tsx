import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { getDistance } from "geolib";

const Game = () => {
  const { currentCountry, selectedCountries } = useContext(AppContext);

  useEffect(() => {
    // getDistance(currentCountry)
  }, [currentCountry, selectedCountries]);

  return <div>Game</div>;
};

export default Game;
