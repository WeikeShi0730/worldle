import useNewCountry from "../utils/useNewCountry";

const CurrentCountry = () => {
  const countrySvg = useNewCountry();
  return (
    <div className="max-w-xs m-auto p-5">
      {countrySvg ? (
        <svg className="w-96 h-96 fill-white">
          <img src={countrySvg} alt="Country SVG" />
        </svg>
      ) : null}
    </div>
  );
};

export default CurrentCountry;
