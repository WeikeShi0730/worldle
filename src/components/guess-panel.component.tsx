const GuessPanel = ({ selectedCountry }: any) => {
  return (
    <div className="flex justify-evenly items-center h-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-1 border-2 rounded">
      <div className="country flex justify-center w-8/12">
        {selectedCountry.label}
      </div>
      <div className="distance flex justify-center w-2/12"></div>
      <div className="direction flex justify-center w-2/12"></div>
    </div>
  );
};

export default GuessPanel;
