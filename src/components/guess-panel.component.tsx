const GuessPanel = ({ selectedCountry }: any) => {
  return (
    <div className="flex h-10 my-1 p-1 bg-white rounded">
      <div className="country flex justify-center w-8/12 border-2 mx-1">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center w-2/12 border-2 mx-1">
        12KM
      </div>
      <div className="direction flex justify-center w-2/12 border-2 mx-1">
        UP
      </div>
    </div>
  );
};

export default GuessPanel;
