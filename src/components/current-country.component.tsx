import { useState, useEffect } from "react";

const CurrentCountry = () => {
  const [countrySvg, setCountrySvg] = useState();
  useEffect(() => {
    const dynamicImport = async () => {
      if (true) {
        const result = await import("../data/countries-svg/ca/vector.svg");
        setCountrySvg(result.default as any);
      }
    };

    dynamicImport();

    return () => {};
  }, []);

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md m-auto p-10">
      <img src={countrySvg} alt="Country SVG" />
    </div>
  );
};

export default CurrentCountry;
