import seedrandom from "seedrandom";
import { countries } from "../data/countries";

const useToday = () => {
  const todayDate = new Date();
  const decimal = seedrandom(todayDate.toLocaleDateString())();
  const index = Math.floor(decimal * countries.length);
  const todayCountry = countries[index];

  return todayCountry;
};

export default useToday;

// Used to generate seed based on TODAY date, and use the seed to get the country for the day
