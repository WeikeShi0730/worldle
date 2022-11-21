import { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useClickOutside } from "../utils/useClickOutside";
import Modal from "./modal.component";
import { VscGraphLine } from "react-icons/vsc";
import { useCookies } from "react-cookie";
import { FINISHED_WIN, FINISHED_LOSE, IN_PROCESS } from "../constants";

const Report = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [statistics, setStatistics] = useState<{
    currentStreak: number;
    maxStreak: number;
    totalPlayed: number;
    totalWin: number;
    winPerc: number;
    history: number[];
  }>({
    currentStreak: 0,
    maxStreak: 0,
    totalPlayed: 0,
    totalWin: 0,
    winPerc: 0,
    history: [],
  });
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));
  const { game, random } = useContext(AppContext);

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    const cockieFound = cookies && cookies.statistics;
    var currentStreak = cockieFound ? cookies.statistics.currentStreak : 0;
    var maxStreak = cockieFound ? cookies.statistics.maxStreak : 0;
    var totalPlayed = cockieFound ? cookies.statistics.totalPlayed : 0;
    var totalWin = cockieFound ? cookies.statistics.totalWin : 0;
    var history = cockieFound ? cookies.statistics.history : [];

    if (game !== IN_PROCESS && !history.includes(random)) {
      totalPlayed += 1;
      if (game === FINISHED_LOSE) {
        currentStreak = 0;
      } else if (game === FINISHED_WIN) {
        currentStreak += 1;
        totalWin += 1;
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
        }
      }
      var winPerc = totalWin / totalPlayed;
      history.push(random);
      const newStatistics = {
        currentStreak,
        maxStreak,
        totalPlayed,
        totalWin,
        winPerc,
        history,
      };
      setStatistics(newStatistics);

      setCookie("statistics", JSON.stringify(newStatistics), {
        maxAge: 86400,
      });
    }
    console.log(cookies);
  }, [game]);

  return (
    <div ref={ref}>
      <div className="flex content-center items-center hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>
          <VscGraphLine />
        </button>
      </div>
      <Modal setOpen={setOpen} open={open} id="modal-report">
        <p className="w-full border-b text-center text-lg md:text-2xl">
          Statistics
        </p>
        <br />
        <p>
          Guess the <span className="font-medium">WORLDLE</span> in 6 guesses.
        </p>
        <br />
        <p>Each guess must be a valid country, territory, ...</p>
        <br />
        <p>
          After each guess, you will be given a{" "}
          <span className="font-medium">distance and direction</span> hint to
          the target country.
        </p>
        <br />
        <p>
          You can enable the option to click on the map to show the{" "}
          <span className="font-medium">flag</span> of the country, which would
          lower the difficulty of the game.
        </p>
        <br />
        <p>
          The game refreshes <span className="font-medium">once a day</span>.
        </p>
        <br />
      </Modal>
    </div>
  );
};

export default Report;
