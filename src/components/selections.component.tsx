import Select from "react-select";
import { countries } from "../data/countries";

const Selections = () => {
  const options = countries.map((country) => {
    return { value: country.code, label: country.name };
  });
  return (
    <>
      <div>Select</div>
      <Select options={options} />
    </>
  );
};

export default Selections;
