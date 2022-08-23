import { useContext, useRef } from "react";
import { AppContext } from "../App";
import { FINISHED_WIN, IN_PROCESS } from "../constants";
import { CountryType, differenceType } from "../interfaces";
import { useClickOutside } from "../utils/useClickOutside";

const Modal = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const {
    currentCountry,
    game,
    setGame,
    numGuesses,
    setNumGuesses,
    setSelectedCountries,
    setDifference,
  } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const handleClickNewGame = () => {
    setOpen(false);
    setNumGuesses(0);
    setSelectedCountries([{}, {}, {}, {}, {}, {}] as CountryType[]);
    setDifference([{}, {}, {}, {}, {}, {}] as differenceType[]);
    setGame(IN_PROCESS);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const message = () => {
    return game === FINISHED_WIN ? (
      numGuesses === 1 ? (
        <div className="p-5 text-sm md:text-base">
          You got it on the{" "}
          <span className="text-base md:text-xl italic">first</span> try!
        </div>
      ) : numGuesses === 6 ? (
        <div className="p-5 text-sm md:text-base">Oof, that was close.</div>
      ) : (
        <div className="p-5 text-sm md:text-base">
          You got it in{" "}
          <span className="text-base md:text-xl italic">{numGuesses} </span>
          guesses.
        </div>
      )
    ) : (
      <div className="p-5 text-sm md:text-base text-center">
        You didn't get it, the country is
        <div className="text-base md:text-xl italic">
          {currentCountry.label}.
        </div>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="fixed w-80 md:w-96 z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white text-base rounded-lg backdrop-blur-md bg-opacity-20 shadow-md"
    >
      <div className="flex flex-col m-5 sm:m-10 text-white">
        <button
          className="self-end m-5 hover:bg-opacity-50 duration-200 hover:text-slate-700 font-light text-lg md:text-2xl"
          onClick={handleClickClose}
        >
          X
        </button>
        <div className="flex flex-col items-center justify-center">
          {message()}
          <button
            className="m-5 p-2 w-40 bg-slate-700 bg-opacity-70 shadow rounded hover:bg-opacity-50 hover:shadow-md duration-200 font-light text-sm md:text-base"
            onClick={handleClickNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
