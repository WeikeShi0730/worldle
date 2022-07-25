import { useState } from "react";

const Instruction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <div className="hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white">
        <button onClick={handleClick}>?</button>
      </div>
      {open ? (
        <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex flex-col m-10">
            <button
              className="self-end m-5 text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700"
              onClick={handleClickClose}
            >
              X
            </button>
            <p className="border-b text-center">How to play</p>
            <br />
            <p>
              Guess the WORLDLE in 6 guesses. Each guess must be a valid
              country, territory, ... After each guess, you will be given a
              distance and direction hint to the target country.
            </p>
            <br />
            <p>
              You can enable the option to click on the map to show the flag of
              the country, which would lower the difficulty of the game.
            </p>
            <br />
            <p>Example:</p>
            <div className=""></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Instruction;
