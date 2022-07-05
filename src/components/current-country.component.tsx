import useNewCountry from "../utils/useNewCountry";

const CurrentCountry = () => {
  const countrySvg = useNewCountry();
  return (
    <div className="max-w-xs m-auto p-5">
      {countrySvg ? (
        <img src={countrySvg} alt="Country SVG" className="fill-white" />
      ) : null}
    </div>
  );
};

export default CurrentCountry;
