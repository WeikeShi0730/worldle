import useNewCountry from "../utils/useNewCountry";

const CurrentCountry = () => {
  const countrySvg = useNewCountry();
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md m-auto p-10">
      {countrySvg ? <img src={countrySvg} alt="Country SVG" /> : null}
    </div>
  );
};

export default CurrentCountry;
