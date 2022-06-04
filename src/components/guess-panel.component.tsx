const GuessPanel = ({ selectedCountry }: any) => {
  return (
    <div className="flex h-10 my-1 rounded text-white">
      <div className="country flex justify-center items-center w-8/12 border-2 ">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center items-center w-2/12 border-2 mx-1">
        12KM
      </div>
      <div className="direction flex justify-center items-center w-2/12 border-2">
        UP
      </div>
    </div>
  );
};

export default GuessPanel;
