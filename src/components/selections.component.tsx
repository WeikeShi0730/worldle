import { useState, useContext } from "react";
import { AppContext } from "../App";
import Select from "react-select";
import { countries } from "../data/countries";
import { CountrySelection } from "../interfaces";

const Selections = () => {
  const { setSelectedCountry } = useContext(AppContext);
  const [country, setCountry] = useState<CountrySelection>({
    value: "",
    label: "",
  });
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedCountry(country);
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
            className="w-full"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Selections;
