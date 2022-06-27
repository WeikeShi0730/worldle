import { useState, useEffect, useContext } from "react";
import { countries } from "../data/countries";
import { AppContext } from "../App";

const CurrentCountry = () => {
  const [countrySvg, setCountrySvg] = useState<any>();
  const { setCurrentCountry } = useContext(AppContext);
  const randomIndex = Math.floor(Math.random() * 246);
  const currentCountry = countries[randomIndex];

  useEffect(() => {
    const dynamicImport = async () => {
      if (true) {
        const result = await import(
          `../data/countries-svg/${currentCountry.value.toLocaleLowerCase()}/vector.svg`
        );
        setCountrySvg(result.default);
        setCurrentCountry(currentCountry);
        console.log(currentCountry);
      }
    };

    dynamicImport();

    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md m-auto p-10">
      <img src={countrySvg} alt="Country SVG" />
    </div>
  );
};

export default CurrentCountry;
