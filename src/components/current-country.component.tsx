import useNewCountry from "../utils/useNewCountry";

const CurrentCountry = () => {
  const countrySvg = useNewCountry();
  return (
    <div className="w-full h-full max-w-xs m-auto p-5">
      {countrySvg ? (
        <div className="h-full flex justify-center items-center gap-x-5">
          <img src={countrySvg.shape} alt="Country SVG" />
          <img src={countrySvg.flag} alt="Country SVG" />
        </div>
      ) : null}
    </div>
  );
};

export default CurrentCountry;
