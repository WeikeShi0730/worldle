const useToday = () => {
  var seedrandom = require("seedrandom");
  const todayCountry = {};
  let generate_random_number = seedrandom("Johnson");
  console.log(generate_random_number());

  return todayCountry;
};

export default useToday;

// Used to generate seed based on TODAY date, and use the seed to get the country for the day
