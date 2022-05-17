import Select from "react-select";
import { countries } from "../data/countries";

const Selections = () => {
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });
  return (
    <>
      <div className="flex justify-evenly items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-5 border-2 rounded">
        <Select options={options} className="w-full" />
      </div>
    </>
  );
};

export default Selections;
