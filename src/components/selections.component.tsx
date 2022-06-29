import { useState, useContext } from "react";
import { AppContext } from "../App";
import Select from "react-select";
import { countries } from "../data/countries";
import { CountryType, differenceType } from "../interfaces";
import { IN_PROCESS } from "../constants";
import { getDistance, convertDistance, getCompassDirection } from "geolib";

const Selections = () => {
  const {
    currentCountry,
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
    setGame,
    difference,
    setDifference,
  } = useContext(AppContext);
  const [country, setCountry] = useState<CountryType>({
    value: "",
    label: "",
    latitude: 0,
    longitude: 0,
  });

  const handleSubmit = () => {
    if (
      country.value !== undefined &&
      country.value !== null &&
      country.value !== ""
    ) {
      let newCountries = selectedCountries;
      newCountries[numGuesses] = country;
      setSelectedCountries(newCountries);

      const currentCountryPos = {
        latitude: currentCountry.latitude,
        longitude: currentCountry.longitude,
      };
      const selectedCountryPos = {
        latitude: selectedCountries[numGuesses]?.latitude,
        longitude: selectedCountries[numGuesses]?.longitude,
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
      newDifferenceArray[numGuesses] = { distance, direction };
      setDifference(newDifferenceArray);

      setCountry({} as CountryType);
      setNumGuesses(numGuesses + 1);
    } else {
      alert("No country found");
      return;
    }
  };

  const handleNewGame = () => {
    setNumGuesses(0);
    setSelectedCountries([{}, {}, {}, {}, {}, {}] as CountryType[]);
    setDifference([{}, {}, {}, {}, {}, {}] as differenceType[]);
    setGame(IN_PROCESS);
  };

  const theme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      text: "#FFFFFF",
      primary50: "rgba(100, 116, 139, 0.1)",
      primary25: "rgba(100, 116, 139, 0.2)",
      primary: "rgba(100, 116, 139, 0.3)",
    },
  });

  const customStyles = {
    control: (base: any) => ({
      ...base,
      background: "transparent",
      border: "2px solid white",
      "&:focus, :hover": {
        border: "2px solid white",
      },
      color: "#FFFFFF",
    }),

    singleValue: (base: any) => ({
      ...base,
      color: "#FFFFFF",
    }),
  };

  return (
    <>
      <div className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-5 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
        <Select
          isDisabled={game === IN_PROCESS ? false : true}
          options={countries}
          value={country}
          onChange={(country) => {
            setCountry(country as CountryType);
          }}
          menuPlacement="top"
          className="w-full"
          theme={theme}
          styles={customStyles}
        />
      </div>
      {game === IN_PROCESS ? (
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 bg-white bg-opacity-90 hover:bg-opacity-100 rounded shadow hover:shadow-md transform duration-200 ease-in-out"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleNewGame}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 bg-white bg-opacity-90 hover:bg-opacity-100 rounded shadow hover:shadow-md transform duration-200 ease-in-out"
        >
          New Game
        </button>
      )}
    </>
  );
};

export default Selections;
