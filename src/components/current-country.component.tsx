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
        <div className="h-full flex justify-center items-center">
          <ReactCardFlip isFlipped={flipped}>
            <div className="w-64 h-64 flex">
              <img
                src={countrySvg.shape}
                alt="Country Shape SVG"
                onClick={handleClick}
              />
            </div>
            <div className="w-64 h-64 flex">
              <img
                src={countrySvg.flag}
                alt="Country Flag SVG"
                onClick={handleClick}
              />
            </div>
          </ReactCardFlip>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentCountry;
