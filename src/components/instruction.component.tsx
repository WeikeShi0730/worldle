import { useState } from "react";

const Instruction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <div className="hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>?</button>
      </div>
      {open ? (
        <div className="modal fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white text-base rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex flex-col m-10">
            <button
              className="self-end m-5 text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700 font-light"
              onClick={handleClickClose}
            >
              X
            </button>
            <p className="border-b text-center text-2xl">How to play</p>
            <br />
            <p>
              Guess the <span className="font-medium">WORLDLE</span> in 6
              guesses.
            </p>
            <br />
            <p>Each guess must be a valid country, territory, ...</p>
            <br />
            <p>
              After each guess, you will be given a distance and direction hint
              to the target country.
            </p>
            <br />
            <p>
              You can enable the option to click on the map to show the flag of
              the country, which would lower the difficulty of the game.
            </p>
            <br />
            <p>Example:</p>
            <div className="">
              <div className="flex w-full h-10 my-1 rounded text-white">
                <div className="country flex justify-center items-center w-7/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  Canada
                </div>
                <div className="distance flex justify-center items-center w-3/12 border-2 mx-1 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  863KM
                </div>
                <div className="direction flex justify-center items-center w-2/12 border-2 rounded shadow-md hover:shadow-gray-400 transform duration-200 ease-in-out">
                  S
                </div>
              </div>
              <p>
                Your guess <span className="font-medium">Canada</span> is 863KM
                away from the target country, and the target country is to the
                South of your guess.
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
