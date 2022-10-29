import { useState, useRef } from "react";
import { useClickOutside } from "../utils/useClickOutside";
import { VscQuestion, VscClose } from "react-icons/vsc";

const Instruction = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <div ref={ref}>
      <div className="flex content-center items-center hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>
          <VscQuestion />
        </button>
      </div>
      {open ? (
        <div className="fixed w-80 md:w-96 z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white text-base rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex flex-col m-5 sm:m-10 text-sm md:text-base">
            <button
              className="flex content-center items-center self-end text-lg md:text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700 font-light"
              onClick={handleClickClose}
            >
              <VscClose />
            </button>
            <p className="border-b text-center text-lg md:text-2xl">
              How to play
            </p>
            <br />
            <p>
              Guess the <span className="font-medium">WORLDLE</span> in 6
              guesses.
            </p>
            <br />
            <p>Each guess must be a valid country, territory, ...</p>
            <br />
            <p>
              After each guess, you will be given a <span className="font-medium">distance and direction</span> hint
              to the target country.
            </p>
            <br />
            <p>
              You can enable the option to click on the map to show the <span className="font-medium">flag</span> of
              the country, which would lower the difficulty of the game.
            </p>
            <br />
            <p>The game refreshes <span className="font-medium">once a day</span>.</p>
            <br />
            <p>Example:</p>
            <div className="">
              <div className="flex w-full h-10 my-1 rounded text-white">
                <div className="country flex justify-center items-center w-7/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  Canada
                </div>
                <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 px-8 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  2264KM
                </div>
                <div className="direction flex justify-center items-center w-2/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  SSE
                </div>
              </div>
              <p>
                Your guess <span className="font-medium">Canada</span> is 2264KM
                away from the target country, and the target country is to the
                South-Southeast of your guess.
              </p>
              <br />
              <div className="flex w-full h-10 my-1 rounded text-white">
                <div className="country flex justify-center items-center w-7/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  United States
                </div>
                <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  ✅
                </div>
                <div className="direction flex justify-center items-center w-2/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  ✅
                </div>
              </div>
              <p>
                Your guess <span className="font-medium">United States</span> is
                the correct answer.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Instruction;
