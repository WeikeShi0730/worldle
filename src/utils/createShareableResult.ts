import { FINISHED_WIN } from "./../constants";
import { CountryType } from "../interfaces";

const directionDictionary: { [key: string]: any } = {
  N: "↑",
  NNE: "↗︎",
  NE: "↗︎",
  ENE: "↗︎",
  E: "→",
  ESE: "↘︎",
  SE: "↘︎",
  SSE: "↘︎",
  S: "↓",
  SSW: "↙︎",
  SW: "↙︎",
  WSW: "↙︎",
  W: "←",
  WNW: "↖︎",
  NW: "↖︎",
  NNW: "↖︎",
};

const getDayOfYear = () => {
  const date = new Date();
  const timestamp1 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);
  const differenceInMilliseconds = timestamp1 - timestamp2;
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  return differenceInDays;
};

const createShareableResult = (
  selectedCountries: CountryType[],
  game: string,
  numGuesses: number
) => {
  var resultString =
    "#Worldle Day#" +
    getDayOfYear() +
    " " +
    (game === FINISHED_WIN ? numGuesses : "X") +
    "/6\n";
  var gameResultString = selectedCountries.reduce(
    (prevString, selectedCountry) => {
      var { direction, distance } = selectedCountry;
      return (
        prevString +
        distance +
        " KM = " +
        Math.round((distance as number) / 1.609) +
        " MI, " +
        directionDictionary[direction as string] +
        "\n"
      );
    },
    ""
  );
  resultString += gameResultString + "worldle-guess.vercel.app";
  navigator.clipboard.writeText(resultString);
  return resultString;
};
export default createShareableResult;
