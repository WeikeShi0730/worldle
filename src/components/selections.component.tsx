import { useState, useContext } from "react";
import { AppContext } from "../App";
import Select from "react-select";
import { countries } from "../data/countries";
import { CountrySelection } from "../interfaces";
import { IN_PROCESS } from "../constants";

const Selections = () => {
  const {
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
    setGame,
  } = useContext(AppContext);
  const [country, setCountry] = useState<CountrySelection>({
    value: "",
    label: "",
  });
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });

  const handleSubmit = () => {
    if (country !== undefined && country !== null && country.value.length > 0) {
      const newCountries = selectedCountries;
      newCountries[numGuesses] = country;
      setSelectedCountries(newCountries);
      setCountry({} as CountrySelection);
      setNumGuesses(numGuesses + 1);
    }
  };

  const handleNewGame = () => {
    setNumGuesses(0);
    setSelectedCountries([{}, {}, {}, {}, {}, {}] as CountrySelection[]);
    setGame(IN_PROCESS);
  };

  const theme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      text: "black",
      primary50: "rgba(100, 116, 139, 0.1)",
      primary25: "rgba(100, 116, 139, 0.2)",
      primary: "rgba(100, 116, 139, 0.3)",
    },
  });

  return (
    <>
      <div className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-5 rounded">
        <Select
          isDisabled={game === IN_PROCESS ? false : true}
          options={options}
          value={country}
          onChange={(country) => {
            setCountry(country as CountrySelection);
          }}
          menuPlacement="top"
          className="w-full"
          theme={theme}
        />
      </div>
      {game === IN_PROCESS ? (
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 bg-white rounded"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleNewGame}
          className="flex justify-center items-center w-40 m-auto p-2 my-5 bg-white rounded"
        >
          New Game
        </button>
      )}
    </>
  );
};

export default Selections;
