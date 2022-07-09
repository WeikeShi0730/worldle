import { useState } from "react";
import useNewCountry from "../utils/useNewCountry";
import ReactCardFlip from "react-card-flip";

const CurrentCountry = () => {
  const countrySvg = useNewCountry();
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleClick = (event: any) => {
    event.preventDefault();
    setFlipped((flipped) => !flipped);
  };
  return (
    <div className="w-full h-full max-w-xs m-auto p-5">
      {countrySvg ? (
        <div className="h-full flex justify-center items-center gap-x-5">
          <ReactCardFlip isFlipped={flipped}>
            <div className="">
              <img src={countrySvg.shape} alt="Country Shape SVG" />
              <button onClick={handleClick}>click</button>
            </div>
            <div className="">
              <img src={countrySvg.flag} alt="Country Flag SVG" />
              <button onClick={handleClick}>click</button>
            </div>
          </ReactCardFlip>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentCountry;
