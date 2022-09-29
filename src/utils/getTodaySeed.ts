import seedrandom from "seedrandom";
const getTodaySeed = () => {
  const todayDate = new Date();
  const random = seedrandom(todayDate.toLocaleDateString())();

  return random;
};

export default getTodaySeed;
