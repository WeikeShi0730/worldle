import Select from "react-select";
import { countries } from "../data/countries";
const GuessPanels = () => {
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });
  return (
    <div className="w-full">
      GuessPanels
      <div className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-1 border-2 rounded">
        <div className="country">Canada</div>
        <div className="distance">1234km</div>
        <div className="direction">⬇️</div>
      </div>
      <Select options={options} />
    </div>
  );
};

export default GuessPanels;
