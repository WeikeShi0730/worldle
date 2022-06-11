import { CountryType, differenceType } from "../interfaces";

type GuessPanelType = {
  selectedCountry: CountryType;
  difference: differenceType;
};

const GuessPanel = ({ selectedCountry, difference }: GuessPanelType) => {
  return (
    <div className="flex w-full h-10 my-1 rounded text-white">
      <div className="country flex justify-center items-center w-7/12 border-2 rounded">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded">
        {difference.distance ? difference.distance + "KM" : ""}
      </div>
      <div className="direction flex justify-center items-center w-2/12 border-2 rounded">
        {difference.direction}
      </div>
    </div>
  );
};

export default GuessPanel;
