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
  } = useContext(AppContext);
  const [country, setCountry] = useState<CountrySelection>({
    value: "",
    label: "",
  });
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (country !== undefined && country !== null && country.value.length > 0) {
      const newCountries = selectedCountries;
      newCountries[numGuesses] = country;
      setSelectedCountries(newCountries);
      setCountry({} as CountrySelection);
      setNumGuesses(numGuesses + 1);
    }
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
      <form onSubmit={handleSubmit}>
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
        <button
          disabled={game === IN_PROCESS ? false : true}
          type="submit"
          className="flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-2 my-5 bg-white rounded"
        >
          {game === IN_PROCESS ? "Submit" : "New Game"}
        </button>
      </form>
    </>
  );
};

export default Selections;
