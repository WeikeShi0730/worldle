import { useState, useContext } from "react";
import { AppContext } from "../App";
import Select from "react-select";
import { countries } from "../data/countries";
import { CountrySelection } from "../interfaces";

const Selections = () => {
  const { numGuesses, setNumGuesses, selectedCountries, setSelectedCountries } =
    useContext(AppContext);
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
      setNumGuesses(numGuesses + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-5 border-2 rounded">
          <Select
            options={options}
            value={country}
            onChange={(country) => {
              setCountry(country as CountrySelection);
            }}
            menuPlacement="top"
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-2 my-5 bg-white rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Selections;
