const GuessPanel = ({ selectedCountry }: any) => {
  return (
    <div className="h-10 m-1 p-1 bg-white border-2 rounded">
      <div className="country flex justify-center w-8/12">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center w-2/12"></div>
      <div className="direction flex justify-center w-2/12"></div>
    </div>
  );
};

export default GuessPanel;
