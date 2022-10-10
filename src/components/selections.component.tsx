import { useState, useContext } from "react";
import { AppContext } from "../App";
import Select from "react-select";
import { countries } from "../data/countries";
import { CountryType } from "../interfaces";
import { IN_PROCESS } from "../constants";
import { getDistance, convertDistance, getCompassDirection } from "geolib";
import getTodaySeed from "../utils/getTodaySeed";

const Selections = () => {
  const {
    todayCountry,
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
  } = useContext(AppContext);
  const [country, setCountry] = useState<CountryType>({
    value: "",
    label: "",
    latitude: 0,
    longitude: 0,
    distance: 0,
    direction: "",
  });

  const currentCountryPos = {
    latitude: todayCountry.latitude,
    longitude: todayCountry.longitude,
  };

  const handleSubmit = () => {
    if (
      country.value !== undefined &&
      country.value !== null &&
      country.value !== ""
    ) {
      const selectedCountryPos = {
        latitude: country?.latitude,
        longitude: country?.longitude,
      };
      const distance = convertDistance(
        getDistance(currentCountryPos, selectedCountryPos, 1000),
        "km"
      );
      const direction = getCompassDirection(
        currentCountryPos,
        selectedCountryPos
      );
      let newCountries = selectedCountries;
      country.direction = direction;
      country.distance = distance;
      newCountries[numGuesses] = country;
      setSelectedCountries(newCountries);

      // Save to locaStorage, TODO: add TTL
      const random = getTodaySeed();
      localStorage.setItem(
        random.toString() as string,
        JSON.stringify(newCountries)
      );

      setCountry({} as CountryType);
      setNumGuesses(numGuesses + 1);
    } else {
      var element = document.getElementById("input-box");
      element?.classList.add("error");
      setTimeout(() => {
        element?.classList.remove("error");
      }, 1000);
    }
  };

  const handleShare = () => {};

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
    }),
    singleValue: (base: any, _: any) => ({
      ...base,
      color: "#FFFFFF",
    }),
    input: (base: any) => ({
      ...base,
      color: "white",
    }),
  };

  return (
    <div className="text-sm md:text-base">
      <div
        id="input-box"
        className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-5 px-5"
      >
        <Select
          isDisabled={game === IN_PROCESS ? false : true}
          options={countries}
          value={country}
          onChange={(country) => {
            setCountry(country as CountryType);
          }}
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
            }
            if (
              e.key === "Enter" &&
              country.value !== undefined &&
              country.value !== ""
            ) {
              handleSubmit();
            }
          }}
          menuPlacement="top"
          className="w-full rounded shadow-md hover:shadow-gray-400 duration-200"
          theme={theme}
          styles={customStyles}
        />
      </div>
      {game === IN_PROCESS ? (
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 font-light bg-white bg-opacity-90 hover:bg-opacity-100 rounded shadow hover:shadow-md transform duration-200 ease-in-out"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleShare}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 font-light bg-white bg-opacity-90 hover:bg-opacity-100 rounded shadow hover:shadow-md transform duration-200 ease-in-out"
        >
          Share
        </button>
      )}
    </div>
  );
};

export default Selections;
