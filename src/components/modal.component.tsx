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
    <>
      <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="h-full flex flex-col items-center justify-center z-10 bg-slate-200 text-white rounded backdrop-blur-md bg-opacity-20">
          <button className="self-end p-5" onClick={handleClickClose}>
            X
          </button>
          {game === FINISHED_WIN ? (
            <div className="p-5">win</div>
          ) : (
            <div className="p-5">lose</div>
          )}
          <button
            className="self-center mt-auto p-5"
            onClick={handleClickNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
