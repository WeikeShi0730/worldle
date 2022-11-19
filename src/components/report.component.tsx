import { useState, useRef } from "react";
import { useClickOutside } from "../utils/useClickOutside";
import Modal from "./modal.component";
import { VscGraphLine } from "react-icons/vsc";

const Report = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  return (
    <div ref={ref}>
      <div className="flex content-center items-center hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>
          <VscGraphLine />
        </button>
      </div>
      <Modal setOpen={setOpen} open={open} id="modal-report">
        <p className="w-full border-b text-center text-lg md:text-2xl">
          How to play
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
