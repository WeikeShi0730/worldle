import seedrandom from "seedrandom";
const getTodaySeed = () => {
  const todayDate = new Date();
  const random = seedrandom(todayDate.toLocaleDateString("en-CA"))();

  return random;
};

export default getTodaySeed;
