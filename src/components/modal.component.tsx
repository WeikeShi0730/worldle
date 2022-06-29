import { useContext } from "react";
import { AppContext } from "../App";
import { FINISHED_WIN, IN_PROCESS } from "../constants";
import { CountryType, differenceType } from "../interfaces";

const Modal = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { game, setGame, setNumGuesses, setSelectedCountries, setDifference } =
    useContext(AppContext);

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
          {game === FINISHED_WIN ? (
            <div className="p-5">win</div>
          ) : (
            <div className="p-5">lose</div>
          )}
          <button
            className="m-5 p-5 bg-slate-700 bg-opacity-70 shadow rounded-lg hover:bg-opacity-50 hover:shadow-md duration-200"
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
