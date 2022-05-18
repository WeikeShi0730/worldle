const GuessPanel = ({ selectedCountry }: any) => {
  return (
    <div className="flex justify-evenly items-center h-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto p-1 border-2 rounded">
      <div className="country ">{selectedCountry.label}</div>
      <div className="distance"></div>
      <div className="direction"></div>
    </div>
  );
};

export default GuessPanel;
