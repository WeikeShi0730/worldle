import { useContext } from "react";
import { AppContext } from "../App";
import { FINISHED_WIN, IN_PROCESS } from "../constants";
import { CountryType, differenceType } from "../interfaces";

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
        <div className="p-5">
          You got it on the <span className="text-xl italic">first</span> try!
        </div>
      ) : numGuesses === 6 ? (
        <div className="p-5">Oof, that was close.</div>
      ) : (
        <div className="p-5">
          You got it in <span className="text-xl italic">{numGuesses} </span>
          guesses.
        </div>
      )
    ) : (
      <div className="p-5 text-center">
        You didn't get it, the country is
        <div className="text-xl italic">{currentCountry.label}.</div>
      </div>
    );
  };

  return (
    <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="h-full flex flex-col items-center justify-center m-10 bg-slate-200 text-white rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
        <button
          className="self-end m-5 text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700"
          onClick={handleClickClose}
        >
          X
        </button>
        <div className="px-16 flex flex-col items-center justify-center">
          {message()}
          <button
            className="m-5 p-2 w-40 bg-slate-700 bg-opacity-70 shadow rounded hover:bg-opacity-50 hover:shadow-md duration-200"
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
